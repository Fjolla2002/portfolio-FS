<script setup lang="ts">
import { ref } from "vue";

const formInputs = ref({
  fullName: "",
  email: "",
  message: "",
});

const fullNameFocused = ref(false);
const emailFocused = ref(false);
const messageFocused = ref(false);

const handleInputChange = (
  field: keyof typeof formInputs.value,
  event: Event
) => {
  const target = event.target as HTMLInputElement;
  formInputs.value[field] = target.value;
};
</script>

<template>
  <div class="p-20 flex flex-col items-start justify-start w-full">
    <h2 class="text-8xl text-baseWhite font-extrabold">Contact</h2>
    <div class="w-full mt-20">
      <div class="w-[50%] flex flex-col items-center justify-center">
        <div class="relative w-full h-full">
          <input
            v-model="formInputs.fullName"
            type="text"
            placeholder=""
            class="px-4 py-2 w-full text-lightGray outline-none rounded-md bg-darkerGray border-2 border-secondaryGray focus:border-paragraphGray transition-all duration-300 ease-in-out"
            @focus="fullNameFocused = true"
            @blur="fullNameFocused = false"
            @change="(event) => handleInputChange('fullName', event)"
          />
          <span
            class="absolute left-0 px-4 py-1 pointer-events-none transition-all duration-300 ease-in-out text-lightGray"
            :class="{
              'top-1/2 transform -translate-y-1/2 ':
                !fullNameFocused && formInputs.fullName === '',
              '-top-3.5 scale-90 bg-darkerGray rounded':
                fullNameFocused || formInputs.fullName !== '',
            }"
          >
            Full Name
          </span>
        </div>
        <div class="relative w-full h-full mt-7">
          <input
            v-model="formInputs.email"
            type="email"
            placeholder=""
            class="px-4 py-2 w-full text-lightGray outline-none rounded-md bg-darkerGray border-2 border-secondaryGray focus:border-paragraphGray transition-all duration-300 ease-in-out"
            @focus="emailFocused = true"
            @blur="emailFocused = false"
            @change="(event) => handleInputChange('email', event)"
          />
          <span
            class="absolute left-0 px-4 py-1 pointer-events-none transition-all duration-300 ease-in-out text-lightGray"
            :class="{
              'top-1/2 transform -translate-y-1/2':
                !emailFocused && formInputs.email === '',
              '-top-3.5 scale-90 bg-darkerGray rounded':
                emailFocused || formInputs.email !== '',
            }"
          >
            Email
          </span>
        </div>
        <div class="relative w-full h-full mt-7">
          <textarea
            v-model="formInputs.message"
            class="px-4 py-2 w-full text-lightGray outline-none rounded-md bg-darkerGray border-2 border-secondaryGray focus:border-paragraphGray transition-all duration-300 ease-in-out"
            @focus="messageFocused = true"
            @blur="messageFocused = false"
            @change="(event) => handleInputChange('message', event)"
          ></textarea>
          <span
            class="absolute left-0 px-4 py-1 pointer-events-none transition-all duration-300 ease-in-out text-lightGray"
            :class="{
              'top-2.5 ': !messageFocused && formInputs.message === '',
              '-top-3.5 scale-90 bg-darkerGray rounded':
                messageFocused || formInputs.message !== '',
            }"
          >
            Message
          </span>
        </div>
        <div class="mt-10">
          <button
            class="cursor-none px-10 py-3 bg-darkerGray rounded-md text-baseWhite hover:bg-gradient transfro transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
