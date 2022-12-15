<script setup>
import { oneOf } from "vue-types";

defineProps({
  family: oneOf(["sans", "serif"]).def("sans"),
  size: oneOf(["sm", "md", "lg"]).def("md"),
  color: oneOf(["black", "grey"]).def("black"),
});
</script>

<template>
  <p
    :class="`${family === 'serif' ? 'font-serif' : 'font-sans'} ${
      size === 'sm'
        ? 'text-14 sm:text-16 lg:text-18'
        : size === 'lg'
        ? 'text-18 sm:text-20 lg:text-24'
        : 'text-16 sm:text-18 lg:text-20'
    } ${
      color === 'grey' ? 'text-neutral-500' : 'text-black'
    } capsize inline-block`"
  >
    <slot></slot>
  </p>
</template>
