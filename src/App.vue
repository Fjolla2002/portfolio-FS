<script setup lang="ts">
import { RouterView } from "vue-router";
import BgCanvas from "./components/BgCanvas.vue";
import CustomCursor from "./components/CustomCursor.vue";
</script>

<template>
  <CustomCursor />
  <BgCanvas />
  <RouterView />
</template>
