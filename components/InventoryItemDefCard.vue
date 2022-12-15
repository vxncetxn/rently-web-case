<script setup>
import { string } from "vue-types";

defineProps({
  name: string().isRequired,
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-y-16 w-full aspect-[3/2] bg-neutral-50 border border-neutral-200"
  >
    <svg class="w-24 h-24">
      <use :href="`#${name.replace(/ /g, '-').toLowerCase()}-icon`" />
    </svg>
    <Text size="sm">{{ name }}</Text>
  </div>
</template>
