<script setup>
const toastState = useToastState();

const dismissHandler = () => {
  toastState.value = {
    isPresent: false,
    message: "",
    type: "",
  };
};

watchEffect(() => {
  if (toastState.value.isPresent) {
    setTimeout(dismissHandler, 4000);
  }
});
</script>

<template>
  <Transition name="toast-anim"
    ><div
      class="fixed z-30 flex items-center w-[calc(100%-32px)] px-16 py-4 sm:py-8 -translate-x-1/2 bg-white border shadow-lg sm:w-auto gap-x-12 border-neutral-200 left-1/2 top-32 rounded-8"
      v-if="toastState.isPresent"
    >
      <svg
        class="w-24 h-24 stroke-teal-400 shrink-0"
        v-if="toastState.type === 'success'"
      >
        <use href="#check-circle-icon" />
      </svg>
      <Text>{{ toastState.message }}</Text>
      <button
        class="flex items-center justify-center w-48 h-48 ml-auto"
        @click="dismissHandler"
      >
        <svg class="w-24 h-24">
          <use href="#x-mark-icon" />
        </svg>
      </button></div
  ></Transition>
</template>
