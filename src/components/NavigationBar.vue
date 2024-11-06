<script setup lang="ts">
import { ref } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";

defineProps<{
  isDesktop: boolean;
}>();

const isSidebarOpen = ref<boolean>(false);

const openSidebar = () => {
  isSidebarOpen.value = true;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};
</script>

<template>
  <div
    class="flex bg-bgDarker"
    :class="{
      'h-screen': isDesktop || (!isDesktop && isSidebarOpen),
      '': !isDesktop && !isSidebarOpen,
    }"
  >
    <div
      class="flex items-start justify-between h-full p-8 w-full"
      :class="{
        'flex-col': isDesktop || (!isDesktop && isSidebarOpen),
        'flex-row': !isDesktop && !isSidebarOpen,
      }"
    >
      <div class="flex flex-col items-start justify-start">
        <RouterLink to="/" @click="closeSidebar">
          <h1 class="text-3xl tracking-wider uppercase whitespace-nowrap">
            <span class="font-extrabold text-lightGray">F</span>
            <span class="outlined-text" :class="[isSidebarOpen ? '' : 'hidden']"
              >jolla</span
            >
            <span class="font-extrabold text-lightGray">S</span>
            <span class="outlined-text" :class="[isSidebarOpen ? '' : 'hidden']"
              >elimi</span
            >
          </h1>
        </RouterLink>
        <span
          class="text-lg text-darkGray"
          :class="[isSidebarOpen ? 'flex' : 'hidden']"
        >
          Software Developer</span
        >
      </div>
      <div
        class="flex items-start w-full"
        :class="isDesktop ? 'justify-center' : 'justify-end'"
      >
        <div
          v-if="!isSidebarOpen"
          class="group flex flex-col items-start justify-start gap-1 py-2"
          @click="openSidebar"
        >
          <span
            class="w-3 h-0.5 bg-darkGray rounded-sm group-hover:w-5 group-hover:bg-baseWhite transition-all duration-300 ease-in-out"
          ></span>
          <span
            class="w-5 h-0.5 bg-darkGray rounded-sm group-hover:bg-baseWhite transition-all duration-300 ease-in-out"
          ></span>
          <span
            class="w-4 h-0.5 bg-darkGray rounded-sm group-hover:w-5 group-hover:bg-baseWhite transition-all duration-300 ease-in-out"
          ></span>
        </div>

        <div
          v-else
          class="min-w-[320px] flex items-center justify-between w-full"
        >
          <ul
            class="flex flex-col items-start justify-center gap-3 text-baseWhite text-xl"
          >
            <li @click="closeSidebar">
              <RouterLink
                to="/"
                active-class="text-transparent bg-clip-text bg-toRightGradient after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-toRightGradient after:transition-all after:duration-300 hover:after:w-full"
                class="cursor-none relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </RouterLink>
            </li>

            <li @click="closeSidebar">
              <RouterLink
                to="/about"
                active-class="text-transparent bg-clip-text bg-toRightGradient after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-toRightGradient after:transition-all after:duration-300 hover:after:w-full"
                class="cursor-none relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </RouterLink>
            </li>
            <li @click="closeSidebar">
              <RouterLink
                to="/work"
                active-class="text-transparent bg-clip-text bg-toRightGradient after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-toRightGradient after:transition-all after:duration-300 hover:after:w-full"
                class="cursor-none relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Work
              </RouterLink>
            </li>
            <li @click="closeSidebar">
              <RouterLink
                to="/experience"
                active-class="text-transparent bg-clip-text bg-toRightGradient after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-toRightGradient after:transition-all after:duration-300 hover:after:w-full"
                class="cursor-none relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Experience
              </RouterLink>
            </li>
            <li @click="closeSidebar">
              <RouterLink
                to="/education"
                active-class="text-transparent bg-clip-text bg-toRightGradient after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-toRightGradient after:transition-all after:duration-300 hover:after:w-full"
                class="cursor-none relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Education
              </RouterLink>
            </li>
            <li @click="closeSidebar">
              <RouterLink
                to="/contact"
                active-class="text-transparent bg-clip-text bg-toRightGradient after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-toRightGradient after:transition-all after:duration-300 hover:after:w-full"
                class="cursor-none relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </RouterLink>
            </li>
          </ul>
          <button
            class="group cursor-none p-3 rounded-full bg-darkerGray transition-transform duration-300 hover:scale-105 hover:bg-gradient"
            @click="closeSidebar"
          >
            <XMarkIcon
              class="h-5 w-5 text-baseWhite transition-transform duration-300 group-hover:rotate-90"
            />
          </button>
        </div>
      </div>
      <div>
        <div v-if="isSidebarOpen">
          <ul
            class="flex items-center justify-start list-disc gap-8 text-darkGray"
          >
            <li class="list-none">
              <a
                href="https://github.com/Fjolla2002"
                target="_blank"
                class="cursor-none relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fjolla-selimi-5a831825a/"
                target="_blank"
                class="cursor-none relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="mailto:fjolla.selimi17@gmail.com"
                class="cursor-none relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="isDesktop" class="h-full w-1 bg-gradient"></div>
  </div>
</template>

<style scoped>
.outlined-text {
  color: transparent;
  -webkit-text-stroke: 1px #d3d3d3;
  text-stroke: 1px #d3d3d3;
}
</style>
