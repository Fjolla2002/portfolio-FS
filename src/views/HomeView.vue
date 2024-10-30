<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div
    class="p-5 h-screen w-full flex flex-col items-center justify-center text-baseWhite"
  >
    <div class="flex flex-col items-start justify-start">
      <h2 class="text-8xl font-extrabold">Hello!</h2>
      <div class="max-w-[350px] flex flex-col mt-5">
        <div class="flex">
          <span class="w-10 h-0.5 bg-baseWhite rounded-sm mt-2.5 mr-3"></span>
          <span class="text-base">
            I'm a Software Developer dedicated to crafting innovative digital
            solutions that enhance user experiences.
          </span>
        </div>
        <span class="w-full flex items-center justify-end mt-5 gap-1">
          <a
            href="../assets/pdfs/CV.pdf"
            download="FjollaSelimi_CV.pdf"
            class="text-lg font-bold cursor-none relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-toRightGradient after:transition-all after:duration-300 hover:after:w-full hover:text-transparent hover:bg-toRightGradient hover:bg-clip-text"
          >
            Resume
          </a>
          <ChevronRightIcon class="h-5 w-5" />
        </span>
      </div>
    </div>
  </div>
</template>
