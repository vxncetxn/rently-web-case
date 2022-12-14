<script setup>
import { string } from "vue-types";

defineProps({
  src: string().isRequired,
  alt: string().isRequired,
});
</script>

<template>
  <img
    class="object-cover w-48 h-48 rounded-full"
    :src="`/mock-images/${src}`"
    :alt="alt"
  />
</template>
