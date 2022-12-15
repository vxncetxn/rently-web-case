<script setup>
import { string } from "vue-types";

defineProps({
  name: string().isRequired,
  image: string().isRequired,
});
</script>

<template>
  <div class="relative">
    <img
      class="w-full aspect-[3/2] object-cover"
      :src="`/mock-images/${image}`"
      :alt="name"
    />
    <div
      class="absolute flex items-center p-4 font-sans bg-white gap-x-12 bottom-16 right-16 text-18 capsize rounded-8"
    >
      <svg class="w-24 h-24">
        <use :href="`#${name.replace(/ /g, '-').toLowerCase()}-icon`" />
      </svg>
      {{ name }}
    </div>
  </div>
</template>
