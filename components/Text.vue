<script setup>
import { oneOf } from "vue-types";

defineProps({
  family: oneOf(["sans", "serif"]).def("sans"),
  size: oneOf(["sm", "md"]).def("md"),
  color: oneOf(["black", "grey"]).def("black"),
});
</script>

<template>
  <p
    :class="`${family === 'serif' ? 'font-serif' : 'font-sans'} ${
      size === 'sm'
        ? 'text-14 sm:text-16 lg:text-18'
        : 'text-16 sm:text-18 lg:text-20'
    } ${color === 'grey' ? 'text-neutral-500' : 'text-black'} capsize`"
  >
    <slot></slot>
  </p>
</template>
