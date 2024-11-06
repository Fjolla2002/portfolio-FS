<script setup lang="ts">
import { ref } from "vue";
import experience from "../assets/data/experience.ts";
import Accordion from "../components/Accordion.vue";

const openStates = ref(experience.reverse().map((_, i) => i === 0));

const toggleAccordion = (index: number) => {
  openStates.value[index] = !openStates.value[index];
};
</script>

<template>
  <div
    class="lg:p-20 py-10 px-5 flex flex-col items-start justify-start w-full"
  >
    <h2 class="lg:text-8xl text-5xl text-baseWhite font-extrabold">
      Experience
    </h2>
    <div class="pt-10 w-full">
      <Accordion
        v-for="(ex, index) in experience"
        :key="ex.id"
        :is-open="openStates[index]"
        :data="ex"
        @toggle="toggleAccordion(index)"
      />
    </div>
  </div>
</template>
