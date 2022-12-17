<script setup>
import localData from "~/data/data.json";

definePageMeta({
  validate: async (route) => {
    return localData.map((d) => d.id).includes(parseInt(route.params.id));
  },
});

const data = useData();
const route = useRoute();
const property = data.value.find((d) => d.id === parseInt(route.params.id));

const formState = useFormState();
if (formState.value.state === null) {
  formState.value = {
    state: JSON.parse(JSON.stringify(property)),
    isTouched: false,
  };
}

const isOpen = ref(false);
const openHandler = () => (isOpen.value = true);
const closeHandler = () => (isOpen.value = false);

useHead({
  title: "Edit Listing | rently.sg",
  meta: [
    {
      name: "og:title",
      content: "Edit Listing | rently.sg",
    },
  ],
});

onBeforeRouteLeave((to, _, next) => {
  if (formState.value.isTouched) {
    if (to.path !== `/property/${route.params.id}/edit/preview`) {
      const isConfirmed = window.confirm(
        "Are you sure you want to leave? You still have unsaved edits made that cannot be restored."
      );
      if (isConfirmed) {
        formState.value = {
          state: null,
          isTouched: false,
        };
        next();
      } else {
        next(false);
      }
    } else {
      next();
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
      <ClientOnly
        ><NuxtLink :to="`/property/${route.params.id}/edit/preview`">
          <PrimaryButton :disabled="!formState.isTouched"
            >Preview edits</PrimaryButton
          >
        </NuxtLink></ClientOnly
      >
    </div>
  </SecondaryBar>
  <Container v-if="formState.state"
    ><div class="flex flex-col w-full px-16 py-48 gap-y-24 sm:px-40 lg:px-64">
      <HeaderOne>Edit Listing</HeaderOne>
      <div class="flex flex-col gap-32 mt-24 lg:mt-40 lg:flex-row">
        <div
          class="flex flex-col items-start gap-y-24 lg:sticky top-[calc(var(--bars-h-lg)+32px)] w-full lg:w-2/5 lg:h-[calc(100vh-var(--bars-h-lg)-64px)]"
        >
          <HeaderTwo>Inventory</HeaderTwo>
          <Text>Items that you provide to your tenant in your property</Text>
          <div class="mt-24">
            <PrimaryButton @click="openHandler"
              >Add inventory item</PrimaryButton
            >
          </div>
        </div>
        <div class="flex flex-col w-full lg:w-3/5 gap-y-48">
          <div class="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
            <div v-for="item in formState.state.items" :key="item.name">
              <InventoryItemEditCard
                :name="item.name"
                :quantity="item.quantity"
                :image="item.image ? item.image : ''"
                :type="item.type"
              />
            </div>
          </div>
        </div>
      </div></div
  ></Container>
  <AddInventoryItemModal :isOpen="isOpen" :close-handler="closeHandler" />
</template>
