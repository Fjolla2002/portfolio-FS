<script setup lang="ts">
import { ref } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
  images: string[];
}>();

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.images.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + props.images.length) % props.images.length;
};
</script>

<template>
  <div
    class="relative overflow-hidden min-h-[500px] w-full flex justify-center items-center px-20 bg-bgDarker"
  >
    <div class="relative flex items-center justify-center">
      <div
        v-for="(slide, index) in images"
        :key="index"
        class="transition-all duration-700 ease-in-out transform max-h-[90vh] h-[90vh]"
        :class="{
          'w-full scale-100 z-10 opacity-100': currentSlide === index,
          hidden: currentSlide !== index,
        }"
        style="transition: transform 0.5s ease, opacity 0.5s ease"
      >
        <img
          :src="slide"
          :alt="slide"
          class="w-full h-full object-contain rounded-lg"
        />
      </div>
    </div>

    <button
      @click="prevSlide"
      class="z-50 absolute left-4 top-1/2 transform -translate-y-1/2 bg-darkerGray p-2 rounded-full hover:bg-gradient"
    >
      <ChevronLeftIcon class="h-5 w-5 text-baseWhite" />
    </button>
    <button
      @click="nextSlide"
      class="z-50 absolute right-4 top-1/2 transform -translate-y-1/2 bg-darkerGray p-2 rounded-full hover:bg-gradient"
    >
      <ChevronRightIcon class="h-5 w-5 text-baseWhite" />
    </button>
  </div>
</template>
