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
const property = data.value.find((d) => d.id === parseInt(route.params.id));

const formState = useFormState();
if (formState.value === null) {
  formState.value = JSON.parse(JSON.stringify(property));
}

const isOpen = ref(false);
const openHandler = () => (isOpen.value = true);
const closeHandler = () => (isOpen.value = false);

onBeforeRouteLeave((to, _, next) => {
  if (to.name !== "property-preview-id") {
    const isConfirmed = window.confirm(
      "Are you sure you want to leave? You still have unsaved edits made that cannot be restored."
    );
    if (isConfirmed) {
      formState.value = null;
      next();
    } else {
      next(false);
    }
  } else {
    next();
  }
});
</script>

<template>
  <SecondaryBar>
    <div
      class="flex items-center justify-between h-full gap-x-16 sm:gap-x-20 lg:gap-x-24"
    >
      <NuxtLink
        class="flex items-center gap-x-16 sm:gap-x-20 lg:gap-x-24"
        :to="`/property/${route.params.id}`"
      >
        <svg class="w-24 h-24 shrink-0">
          <use href="#chevron-left-icon" />
        </svg>
        <Text color="grey">Back to listing</Text>
      </NuxtLink>
      <NuxtLink :to="`/property/preview/${route.params.id}`"
        ><PrimaryButton>Preview edits</PrimaryButton></NuxtLink
      >
    </div>
  </SecondaryBar>
  <Container v-if="formState"
    ><div class="flex flex-col w-full px-16 py-48 gap-y-24 sm:px-40 lg:px-64">
      <HeaderOne>Edit Listing</HeaderOne>
      <div class="flex flex-col mt-40 lg:flex-row gap-x-32">
        <div
          class="flex flex-col items-start gap-y-40 mt-96 lg:mt-0 sticky top-[calc(var(--bars-h-lg)+32px)] w-full lg:w-2/5 h-[calc(100vh-var(--bars-h-lg)-64px)]"
        >
          <HeaderTwo>Inventory</HeaderTwo>
          <Text>Items that you provide to your tenant in your property</Text>
          <PrimaryButton @click="openHandler">Add inventory item</PrimaryButton>
        </div>
        <div class="flex flex-col w-full lg:w-3/5 gap-y-48">
          <div class="grid grid-cols-2 gap-12">
            <div v-for="item in formState.items" :key="item.name">
              <InventoryItemCard
                :name="item.name"
                :quantity="item.quantity"
                :image="item.image ? item.image : ''"
              />
            </div>
          </div>
        </div>
      </div></div
  ></Container>
  <AddInventoryItemModal
    :isOpen="isOpen"
    :close-handler="closeHandler"
    title="Add Inventory Item"
  />
</template>
