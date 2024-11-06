<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/solid";
import Certificate from "../assets/pdfs/Certificate.pdf";
</script>

<template>
  <div class="lg:p-20 py-10 px-5 flex flex-col items-start justify-start">
    <h2 class="lg:text-8xl text-5xl text-baseWhite font-extrabold">
      Education
    </h2>
    <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 pt-10">
      <div
        class="flex flex-col items-start justify-start text-lightGray lg:p-5 p-0 h-full"
      >
        <h4 class="text-2xl font-semibold">University Degrees</h4>
        <ul class="mt-5 w-full h-full flex-1">
          <li
            class="flex flex-col items-start justify-start w-full bg-darkerGray p-5 rounded-lg h-full"
          >
            <span class="flex w-full justify-end text-sm"
              >Oct 2020 - Dec 2023</span
            >
            <div
              class="flex flex-col items-start justify-start w-full mt-5 text-darkGray"
            >
              <span>University of Prishtina "Hasan Prishtina",</span>
              <span>Faculty of Mathematical and Natural Sciences,</span>
              <span>Department of Mathematics,</span>
              <span>Computer Science Program</span>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col items-start justify-start text-lightGray p-5 h-full"
      >
        <h4 class="text-2xl font-semibold">Course Achievements</h4>
        <ul class="mt-5 w-full h-full flex-1">
          <li
            class="flex flex-col items-start justify-start w-full bg-darkerGray p-5 rounded-lg h-full"
          >
            <span class="flex w-full justify-end text-sm"
              >July 2023 - Nov 2023</span
            >
            <div
              class="flex items-center justify-start w-full mt-5 text-darkGray gap-2"
            >
              <span>React JavaScript Programming - BIT Academy</span>
              <span class="text-[#ffa500] hover:text-[#ff4500]">
                <a :href="Certificate" download="FjollaSelimi_Certificate.pdf">
                  <ArrowTopRightOnSquareIcon class="h-4 w-4" />
                </a>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
