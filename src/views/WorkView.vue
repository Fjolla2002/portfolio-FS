<script setup lang="ts">
import { useRouter } from "vue-router";
import work from "../assets/data/work";

const router = useRouter();

const navToDetailPage = (pageTitle: string) => {
  const title = pageTitle.replace(/ /g, "_");
  router.push({ name: "work-detail", params: { title } });
};
</script>

<template>
  <div
    v-if="$route.name !== 'work-detail'"
    class="lg:p-20 py-10 px-5 flex flex-col items-start justify-start w-full"
  >
    <h2 class="lg:text-8xl text-5xl text-baseWhite font-extrabold">Work</h2>
    <div
      class="lg:w-[83%] w-full ml-auto grid lg:grid-cols-2 grid-cols-1 gap-10 mt-20"
    >
      <div
        v-for="(item, index) in work"
        :key="index"
        :class="{ 'lg:-mt-28 mt-0': (index + 1) % 2 === 0 }"
        class="group"
      >
        <h5
          class="text-xl text-baseWhite font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-baseWhite after:transition-width after:duration-300 after:ease-in-out after:w-0 group-hover:after:w-full"
          @click="navToDetailPage(item.title)"
        >
          {{ item.title }}
        </h5>
        <div
          class="mt-7 w-full h-[300px] overflow-hidden"
          @click="navToDetailPage(item.title)"
        >
          <div
            class="w-full h-full bg-cover bg-no-repeat scale-110 transition-transform duration-300 hover:scale-100"
            :style="{ backgroundImage: `url(${item.images[0]})` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
