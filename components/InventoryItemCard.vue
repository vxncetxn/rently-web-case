<script setup>
import { string, integer } from "vue-types";

defineProps({
  name: string().isRequired,
  quantity: integer().isRequired,
  image: string(),
});
</script>

<template>
  <div class="relative" v-if="image">
    <img
      class="w-full aspect-[3/2] object-cover"
      :src="`/mock-images/${image}`"
      :alt="name"
    />
    <div
      class="absolute flex items-center p-4 font-sans bg-white gap-x-12 bottom-16 right-16 text-14 sm:text-16 lg:text-18 capsize rounded-8"
    >
      <svg class="w-24 h-24">
        <use :href="`#${name.replace(/ /g, '-').toLowerCase()}-icon`" />
      </svg>
      {{ name }}
      x{{ quantity }}
    </div>
  </div>
  <div
    class="flex flex-col justify-center items-center gap-y-16 w-full aspect-[3/2] bg-neutral-50 border border-neutral-200"
    v-else
  >
    <svg class="w-24 h-24">
      <use :href="`#${name.replace(/ /g, '-').toLowerCase()}-icon`" />
    </svg>
    <Text size="sm">{{ name }} x{{ quantity }}</Text>
  </div>
</template>
