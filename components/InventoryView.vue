<script setup>
import { string, shape, oneOf, integer, arrayOf } from "vue-types";

const props = defineProps({
  inventory: arrayOf(
    shape({
      name: string(),
      image: string(),
      type: oneOf([
        "Bathroom & Laundry",
        "Bedroom",
        "Kitchen",
        "Entertainment & Internet",
        "Heating",
        "House Safety",
      ]),
      quantity: integer(),
    })
  ).isRequired,
});

const sectionedInventory = {
  "Bathroom & Laundry": [],
  Bedroom: [],
  Kitchen: [],
  "Entertainment & Internet": [],
  Heating: [],
  "House Safety": [],
};
const sortedInventory = [...props.inventory].sort((a, b) => {
  if (b.image && !a.image) {
    return 1;
  } else {
    return 0;
  }
});

sortedInventory.forEach((i) => {
  sectionedInventory[i.type].push({ ...i });
});

const isOpen = ref(false);
const openHandler = () => (isOpen.value = true);
const closeHandler = () => (isOpen.value = false);
</script>

<template>
  <div class="flex flex-col gap-y-24">
    <div class="grid grid-cols-2 gap-12">
      <div v-for="item in sortedInventory.slice(0, 6)" :key="item.name">
        <InventoryItemImgCard
          v-if="item.image"
          :name="item.name"
          :image="item.image"
        />
        <InventoryItemDefCard v-else :name="item.name" />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <SecondaryButton @click="openHandler"
        >View all {{ inventory.length }} items</SecondaryButton
      >
    </div>
  </div>
  <Modal :isOpen="isOpen" :close-handler="closeHandler" title="Inventory">
    <div class="flex flex-col gap-y-48">
      <div
        class="flex flex-col gap-y-24"
        v-for="[section, items] in Object.entries(sectionedInventory).filter(
          ([_, items]) => items.length
        )"
        :key="section"
      >
        <Text size="lg">
          {{ section }}
        </Text>
        <div class="grid grid-cols-2 gap-12">
          <div v-for="item in items" :key="item.name">
            <InventoryItemImgCard
              v-if="item.image"
              :name="item.name"
              :image="item.image"
            />
            <InventoryItemDefCard v-else :name="item.name" />
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>
