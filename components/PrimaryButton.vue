<script setup>
import { bool } from "vue-types";

defineProps({
  disabled: bool().def(false),
});
</script>

<template>
  <button
    class="px-16 py-8 font-sans text-white bg-black text-16 capsize rounded-4 hover:bg-teal-800 sm:text-18 lg:text-20 sm:py-12 lg:py-16 sm:rounded-8 disabled:bg-neutral-300 disabled:cursor-not-allowed"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
