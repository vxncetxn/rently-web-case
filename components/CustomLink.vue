<script setup>
import { string } from "vue-types";

defineProps({
  to: string(),
});
</script>

<template>
  <NuxtLink class="font-sans text-20 text-neutral-500" :to="to">
    <slot></slot>
  </NuxtLink>
</template>
