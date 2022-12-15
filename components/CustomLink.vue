<script setup>
import { string } from "vue-types";

defineProps({
  to: string().isRequired,
});
</script>

<template>
  <NuxtLink
    class="font-sans text-16 text-neutral-500 sm:text-18 lg:text-20"
    :to="to"
  >
    <slot></slot>
  </NuxtLink>
</template>
