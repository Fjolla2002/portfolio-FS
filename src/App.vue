<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterView } from "vue-router";
import BgCanvas from "./components/BgCanvas.vue";
import CustomCursor from "./components/CustomCursor.vue";
import NavigationBar from "./components/NavigationBar.vue";

const isDesktop = ref(false);

const checkIfDesktop = () => {
  const desktopWidth = 1024;
  isDesktop.value =
    window.innerWidth >= desktopWidth && screen.width >= desktopWidth;
};

onMounted(() => {
  checkIfDesktop();
  window.addEventListener("resize", checkIfDesktop);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkIfDesktop);
});
</script>

<template>
  <div class="relative min-h-screen">
    <BgCanvas class="absolute inset-0 z-0" />
    <div
      class="flex w-full min-h-screen relative z-10"
      :class="isDesktop ? 'flex-row' : 'flex-col'"
    >
      <NavigationBar :isDesktop="isDesktop" />
      <div class="h-screen overflow-y-auto w-full">
        <RouterView />
      </div>
    </div>
    <CustomCursor v-if="isDesktop" class="absolute inset-0 z-20" />
  </div>
</template>
