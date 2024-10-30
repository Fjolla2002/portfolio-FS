<script setup lang="ts">
import { RouterView } from "vue-router";
import BgCanvas from "./components/BgCanvas.vue";
import CustomCursor from "./components/CustomCursor.vue";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <CustomCursor />
  <BgCanvas />
  <div class="absolute top-0 left-0 w-full min-h-screen h-auto flex">
    <NavigationBar />
    <RouterView />
  </div>
</template>
