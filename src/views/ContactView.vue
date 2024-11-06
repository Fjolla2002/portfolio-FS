<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const formInputs = ref({
  fullName: "",
  email: "",
  message: "",
});

const fullNameFocused = ref(false);
const emailFocused = ref(false);
const messageFocused = ref(false);
const isSubmitting = ref(false);
const submissionMessage = ref("");

const errors = ref({
  fullName: "",
  email: "",
  message: "",
});

const handleInputChange = (field: keyof typeof formInputs.value) => {
  validateField(field);
};

const validateField = (field: keyof typeof formInputs.value) => {
  if (field === "fullName") {
    errors.value.fullName = formInputs.value.fullName.trim()
      ? ""
      : "Full name is required.";
  }

  if (field === "email") {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    errors.value.email = formInputs.value.email.trim()
      ? emailPattern.test(formInputs.value.email)
        ? ""
        : "Please enter a valid email address."
      : "Email is required.";
  }

  if (field === "message") {
    errors.value.message = formInputs.value.message.trim()
      ? ""
      : "Message is required.";
  }
};

const handleFormSubmit = async () => {
  validateField("fullName");
  validateField("email");
  validateField("message");

  if (errors.value.fullName || errors.value.email || errors.value.message) {
    return;
  }

  isSubmitting.value = true;
  submissionMessage.value = "Sending...";

  try {
    const templateParams = {
      from_fullName: formInputs.value.fullName,
      from_email: formInputs.value.email,
      message: formInputs.value.message,
    };

    await emailjs.send(
      "service_c4115w6",
      "template_040dosi",
      templateParams,
      "4ZMf9g_yhpgBtCDQ2"
    );

    submissionMessage.value = "Message sent successfully!";
    formInputs.value = { fullName: "", email: "", message: "" };
  } catch (error) {
    submissionMessage.value = "Failed to send message. Please try again.";
    console.error("EmailJS Error:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div
    class="lg:p-20 py-10 px-5 flex flex-col items-start justify-start w-full"
  >
    <h2 class="lg:text-8xl text-5xl text-baseWhite font-extrabold">Contact</h2>
    <div class="w-full mt-20">
      <div class="lg:w-[50%] w-full flex flex-col items-start justify-center">
        <div class="relative w-full h-full">
          <input
            v-model="formInputs.fullName"
            type="text"
            placeholder=""
            :class="[
              'px-4 py-2 w-full text-lightGray outline-none rounded-md bg-darkerGray border-2 transition-all duration-300 ease-in-out',
              errors.fullName
                ? 'border-red-500 focus:border-red-500'
                : 'border-paragraphGray',
            ]"
            @focus="fullNameFocused = true"
            @blur="fullNameFocused = false"
            @input="handleInputChange('fullName')"
          />
          <span
            class="absolute left-0 px-4 py-1 pointer-events-none transition-all duration-300 ease-in-out text-lightGray"
            :class="{
              'top-1/2 transform -translate-y-1/2 ':
                !fullNameFocused && formInputs.fullName === '',
              '-top-5 scale-90 bg-darkerGray rounded':
                fullNameFocused || formInputs.fullName !== '',
            }"
          >
            Full Name
          </span>
        </div>
        <p v-if="errors.fullName" class="text-red-500 mt-1">
          {{ errors.fullName }}
        </p>
        <div class="relative w-full h-full mt-7">
          <input
            v-model="formInputs.email"
            type="email"
            placeholder=""
            :class="[
              'px-4 py-2 w-full text-lightGray outline-none rounded-md bg-darkerGray border-2 transition-all duration-300 ease-in-out',
              errors.email
                ? 'border-red-500 focus:border-red-500'
                : 'border-paragraphGray',
            ]"
            @focus="emailFocused = true"
            @blur="emailFocused = false"
            @input="handleInputChange('email')"
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
        <p v-if="errors.email" class="text-red-500 mt-1">
          {{ errors.email }}
        </p>
        <div class="relative w-full h-full mt-7">
          <textarea
            v-model="formInputs.message"
            placeholder=""
            :class="[
              'px-4 py-2 w-full text-lightGray outline-none rounded-md bg-darkerGray border-2 transition-all duration-300 ease-in-out',
              errors.message
                ? 'border-red-500 focus:border-red-500'
                : 'border-paragraphGray',
            ]"
            @focus="messageFocused = true"
            @blur="messageFocused = false"
            @input="handleInputChange('message')"
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
        <p v-if="errors.message" class="text-red-500 mt-1">
          {{ errors.message }}
        </p>
        <div class="mt-10 flex flex-col items-center">
          <button
            @click="handleFormSubmit"
            type="submit"
            :disabled="isSubmitting"
            class="cursor-none px-10 py-3 bg-darkerGray rounded-md text-baseWhite hover:bg-gradient transition-all duration-300 ease-in-out"
          >
            {{ isSubmitting ? "Sending..." : "Submit" }}
          </button>
          <p v-if="submissionMessage" class="mt-4 text-lightGray">
            {{ submissionMessage }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
