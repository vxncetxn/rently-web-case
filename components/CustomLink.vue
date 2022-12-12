<script setup>
const props = defineProps(["to"]);
</script>

<template>
  <NuxtLink class="font-sans text-20 text-[#7A7A7A]" :to="props.to">
    <slot></slot>
  </NuxtLink>
</template>
