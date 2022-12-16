<script setup>
import { computed } from "vue";
import localData from "~/data.json";

definePageMeta({
  validate: async (route) => {
    return localData.map((d) => d.id).includes(parseInt(route.params.id));
  },
});

const data = useData();
const route = useRoute();
</script>

<template>
  <SecondaryBar>
    <div
      class="flex items-center justify-between h-full gap-x-16 sm:gap-x-20 lg:gap-x-24"
    >
      <NuxtLink
        class="flex items-center gap-x-16 sm:gap-x-20 lg:gap-x-24"
        :to="`/property/edit/${route.params.id}`"
      >
        <svg class="w-24 h-24 shrink-0">
          <use href="#chevron-left-icon" />
        </svg>
        <Text color="grey">Back to edits</Text>
      </NuxtLink>
      <PrimaryButton>Approve edits</PrimaryButton>
    </div>
  </SecondaryBar>
  <Container
    ><div class="flex flex-col w-full px-16 py-48 gap-y-24 sm:px-40 lg:px-64">
      <HeaderOne>Preview Edits</HeaderOne>
      <div class="flex flex-col mt-40 lg:flex-row gap-x-32"></div></div
  ></Container>
</template>
