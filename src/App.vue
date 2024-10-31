<script setup lang="ts">
import { RouterView } from "vue-router";
import BgCanvas from "./components/BgCanvas.vue";
import CustomCursor from "./components/CustomCursor.vue";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <div class="relative min-h-screen">
    <BgCanvas class="absolute inset-0 z-0" />
    <div class="flex w-full min-h-screen relative z-10">
      <NavigationBar />
      <div class="h-screen overflow-y-auto w-full">
        <RouterView />
      </div>
    </div>
    <CustomCursor class="absolute inset-0 z-20" />
  </div>
</template>
