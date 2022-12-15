<script setup>
import { computed } from "vue";
import data from "~/data.json";

definePageMeta({
  validate: async (route) => {
    return data.map((d) => d.id).includes(parseInt(route.params.id));
  },
});

const route = useRoute();
const property = data.find((d) => d.id === parseInt(route.params.id));

const inventoryState = computed(() => {
  return property.items;
});
</script>

<template>
  <SecondaryBar />
  <Container
    ><div class="flex flex-col w-full px-16 py-48 gap-y-24 sm:px-40 lg:px-64">
      <HeaderOne>Edit Listing</HeaderOne>
      <div class="flex flex-col mt-40 lg:flex-row gap-x-32">
        <div
          class="flex flex-col items-start gap-y-40 mt-96 lg:mt-0 sticky top-[calc(var(--bars-h-lg)+32px)] w-full lg:w-2/5 h-[calc(100vh-var(--bars-h-lg)-64px)]"
        >
          <HeaderTwo>Inventory</HeaderTwo>
          <Text>Items that you provide to your tenant in your property</Text>
          <PrimaryButton>Add inventory item</PrimaryButton>
        </div>
        <div class="flex flex-col w-full lg:w-3/5 gap-y-48">
          <div class="grid grid-cols-2 gap-12">
            <div v-for="item in inventoryState" :key="item.name">
              <InventoryItemImgCard
                v-if="item.image"
                :name="item.name"
                :image="item.image"
              />
              <InventoryItemDefCard v-else :name="item.name" />
            </div>
          </div>
        </div>
      </div></div
  ></Container>
</template>
