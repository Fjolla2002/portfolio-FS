<script setup lang="ts">
import work from "../assets/data/work";
</script>

<template>
  <div class="p-20 flex flex-col items-start justify-start w-full">
    <h2 class="text-8xl text-baseWhite font-extrabold">Work</h2>
    <div class="w-[83%] ml-auto grid grid-cols-2 gap-8 mt-20">
      <div v-for="item in work" class="group">
        <h5
          class="text-xl text-baseWhite font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-baseWhite after:transition-width after:duration-300 after:ease-in-out after:w-0 group-hover:after:w-full"
        >
          {{ item.title }}
        </h5>
        <div class="mt-7 w-full h-[300px] overflow-hidden">
          <div
            class="w-full h-full bg-cover bg-no-repeat scale-110 transition-transform duration-300 hover:scale-100"
            :style="{ backgroundImage: `url(${item.images[0]})` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
