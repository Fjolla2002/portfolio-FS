<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Particle } from "../entities/Particle";

const canvas = ref<HTMLCanvasElement | null>(null);
const particles: Particle[] = [];
const spacing = 3;
const animationSpeed = 0.05;

onMounted(() => {
  window.addEventListener("resize", initializeCanvas);
  initializeCanvas();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", initializeCanvas);
});

const createParticle = (
  x: number,
  y: number,
  targetX: number,
  targetY: number
): Particle => {
  const particle: Particle = {
    x: x + Math.random() * 10 - 5,
    y: y + Math.random() * 10 - 5,
    targetX,
    targetY,
    size: Math.random() * 1.5 + 0.5,

    update: () => {
      const dx = particle.targetX - particle.x;
      const dy = particle.targetY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 1) {
        particle.x = particle.targetX;
        particle.y = particle.targetY;
      } else {
        particle.x += dx * animationSpeed;
        particle.y += dy * animationSpeed;
      }
    },

    draw: (ctx: CanvasRenderingContext2D) => {
      ctx.fillStyle = "#b0b0b0";
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    },
  };
  return particle;
};

const createParticlesFromText = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
  ctx.font = `bold ${canvas.value!.height}px Arial`;
  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  ctx.fillText("</>", canvas.value!.width / 2, canvas.value!.height / 1.15);

  const imageData = ctx.getImageData(
    0,
    0,
    canvas.value!.width,
    canvas.value!.height
  );
  for (let y = 0; y < canvas.value!.height; y += spacing) {
    for (let x = 0; x < canvas.value!.width; x += spacing) {
      const index = (y * canvas.value!.width + x) * 4;
      const alpha = imageData.data[index + 3];
      if (alpha > 128) {
        const startX = Math.random() * canvas.value!.width;
        const startY = Math.random() * canvas.value!.height;
        particles.push(createParticle(startX, startY, x, y));
      }
    }
  }
  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
};

const animate = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
  let formationComplete = true;

  particles.forEach((particle) => {
    particle.update();
    particle.draw(ctx);
    if (particle.x !== particle.targetX || particle.y !== particle.targetY) {
      formationComplete = false;
    }
  });

  if (!formationComplete) {
    requestAnimationFrame(() => animate(ctx));
  }
};

const initializeCanvas = () => {
  if (canvas.value) {
    const ctx = canvas.value.getContext("2d");
    if (ctx) {
      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;
      particles.length = 0;
      createParticlesFromText(ctx);
      animate(ctx);
    }
  }
};
</script>

<template>
  <canvas ref="canvas" class="block"></canvas>
</template>
