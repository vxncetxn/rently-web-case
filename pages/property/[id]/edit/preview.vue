<script setup>
import localData from "~/data.json";
import itemsReference from "~/items-reference.json";

definePageMeta({
  validate: async (route) => {
    return localData.map((d) => d.id).includes(parseInt(route.params.id));
  },
});

const data = useData();
const route = useRoute();
const formState = useFormState();
if (formState.value === null) {
  navigateTo(`/property/${route.params.id}/edit`);
}

const sectionedInventory = {};
itemsReference.forEach((i) => (sectionedInventory[i.name] = []));

formState.value.items.forEach((i) => {
  sectionedInventory[i.type].push({ ...i });
});

onBeforeRouteLeave((to, _, next) => {
  if (to.name !== "property-id-edit") {
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
        :to="`/property/${route.params.id}/edit`"
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
      <div class="flex flex-col mt-24 lg:w-3/5 gap-y-48 lg:mt-40">
        <HeaderTwo>Inventory</HeaderTwo>
        <div class="flex flex-col gap-y-48">
          <div
            class="flex flex-col gap-y-24"
            v-for="[section, items] in Object.entries(
              sectionedInventory
            ).filter(([_, items]) => items.length)"
            :key="section"
          >
            <Text size="lg">
              {{ section }}
            </Text>
            <div class="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
              <div v-for="item in items" :key="item.name">
                <InventoryItemCard
                  :name="item.name"
                  :quantity="item.quantity"
                  :image="item.image ? item.image : ''"
                />
              </div>
            </div>
          </div>
        </div>
      </div></div
  ></Container>
</template>
