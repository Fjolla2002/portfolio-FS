<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";
import { Experience } from "../entities/Experience";

const props = defineProps<{
  isOpen: boolean;
  data: Experience;
}>();

const emit = defineEmits(["toggle"]);

const toggleAccordion = () => {
  emit("toggle");
};

const formatDate = (dateStr: string | null) => {
  if (!dateStr) return "present";
  const date = new Date(dateStr.split("/").reverse().join("-"));
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
};
</script>

<template>
  <div class="bg-darkerGray w-full p-4 rounded-lg mb-5 text-baseWhite">
    <div class="flex items-start justify-between">
      <div class="flex flex-col items-start justify-start">
        <h4 class="font-extrabold text-lg">{{ data.company }}</h4>
        <span class="py-1">{{ data.position }}</span>
      </div>
      <div class="flex items-start justify-start gap-5">
        <div class="flex flex-col items-start justify-start">
          <span>
            {{ formatDate(data.startDate) }} - {{ formatDate(data.endDate) }}
          </span>
          <span class="flex w-full justify-end py-1">{{ data.location }}</span>
        </div>
        <span @click="toggleAccordion">
          <ChevronDownIcon class="h-6 w-6" v-if="!isOpen" />
          <ChevronUpIcon class="h-6 w-6" v-if="isOpen" />
        </span>
      </div>
    </div>
    <div v-if="isOpen" class="pt-5 text-darkGray pr-5">
      <p v-if="data.description">
        {{ data.description }}
      </p>
      <ul
        v-if="data.projects && data.projects.length"
        class="list-disc px-5 mb-6 last:mb-0 space-y-3"
      >
        <li v-for="(project, index) in data.projects" :key="index">
          {{ project.description }}
        </li>
      </ul>
    </div>
  </div>
</template>
