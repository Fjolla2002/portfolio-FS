<script setup lang="ts">
import { useRoute } from "vue-router";
import work from "../assets/data/work";
import ImageSlider from "../components/ImageSlider.vue";

const route = useRoute();
const workTitle = route.params.title as string;

const formattedTitle = workTitle.replace(/_/g, " ");

const workItem = work.find((item) => item.title === formattedTitle);

const statusLabel = (status: string) => {
  if (status === "Working") {
    return "Working";
  } else {
    return "Implemented";
  }
};
</script>

<template>
  <div
    v-if="workItem"
    class="lg:p-20 py-10 px-5 flex flex-col items-start justify-start w-full"
  >
    <h3 class="text-5xl text-baseWhite font-extrabold">
      {{ workItem.title }}
    </h3>
    <p class="text-base text-lightGray mt-10">
      <span>{{ statusLabel(workItem.status) }}</span>
      with
      {{ workItem.technologiesUsed }}
    </p>

    <div class="w-full mt-10">
      <ImageSlider :images="workItem.images" />
    </div>
  </div>
</template>
