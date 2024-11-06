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

const handleInputChange = (
  field: keyof typeof formInputs.value,
  event: Event
) => {
  const target = event.target as HTMLInputElement;
  formInputs.value[field] = target.value;
};

// const submitForm = (e: Event) => {
//   e.preventDefault();

//   emailjs
//     .sendForm(
//       "service_c4115w6",
//       "template_i49917j",
//       formInputs.value.,
//       "4ZMf9g_yhpgBtCDQ2"
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//         setSuccessfullySend(data[lang].contactPage.form.successText);
//         setShowSuccessMessage(true);
//         setTimeout(() => {
//           setShowSuccessMessage(false);
//         }, 10000);
//         resetForm();
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
// };

const handleFormSubmit = async () => {
  if (
    !formInputs.value.fullName ||
    !formInputs.value.email ||
    !formInputs.value.message
  ) {
    submissionMessage.value = "Please fill in all fields.";
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
    console.log(templateParams);

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
      <div class="lg:w-[50%] w-full flex flex-col items-center justify-center">
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
              '-top-5 scale-90 bg-darkerGray rounded':
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
            @click="handleFormSubmit"
            type="submit"
            :disabled="isSubmitting"
            class="cursor-none px-10 py-3 bg-darkerGray rounded-md text-baseWhite hover:bg-gradient transfro transition-all duration-300 ease-in-out"
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
