<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const cursor = ref<HTMLDivElement | null>(null);

const moveCursor = (event: MouseEvent) => {
  if (cursor.value) {
    cursor.value.style.left = `${event.clientX}px`;
    cursor.value.style.top = `${event.clientY}px`;
  }
};

onMounted(() => {
  window.addEventListener("mousemove", moveCursor);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", moveCursor);
});
</script>

<template>
  <div
    ref="cursor"
    class="fixed w-12 h-12 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 bg-[radial-gradient(circle,_white_0%,_#b0b0b0_50%,_#1a1a1a_100%)]"
  ></div>
</template>
