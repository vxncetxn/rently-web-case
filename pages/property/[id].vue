<script setup>
import data from "~/data.json";

definePageMeta({
  validate: async (route) => {
    return data.map((d) => d.id).includes(parseInt(route.params.id));
  },
});

const route = useRoute();
const property = data.find((d) => d.id === parseInt(route.params.id));
</script>

<template><SecondaryBar /></template>
