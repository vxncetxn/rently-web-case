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

props.inventory
  .sort((a, b) => {
    if (b.image && !a.image) {
      return 1;
    } else {
      return -1;
    }
  })
  .forEach((i) => {
    sectionedInventory[i.type].push({ ...i });
  });

const isOpen = ref(false);
const openHandler = () => (isOpen.value = true);
const closeHandler = () => (isOpen.value = false);
</script>

<template>
  <div class="grid grid-cols-2 gap-12">
    <div v-for="item in inventory.slice(0, 6)" :key="item.name">
      <img
        class="w-full aspect-[3/2] object-cover"
        v-if="item.image"
        :src="`/mock-images/${item.image}`"
        alt=""
      />
      <div
        class="flex flex-col justify-center items-center gap-y-16 w-full aspect-[3/2] bg-neutral-50 border border-neutral-200"
        v-else
      >
        <svg class="w-24 h-24">
          <use :href="`#${item.name.replace(/ /g, '-').toLowerCase()}-icon`" />
        </svg>
        <Text>{{ item.name }}</Text>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center">
    <SecondaryButton @click="openHandler"
      >View all {{ inventory.length }} items</SecondaryButton
    >
  </div>
  <Modal :isOpen="isOpen" :close-handler="closeHandler" title="Inventory">
    <div class="flex flex-col gap-y-40">
      <div
        class="flex flex-col gap-y-24"
        v-for="[section, items] in Object.entries(sectionedInventory).filter(
          ([_, items]) => items.length
        )"
        :key="section"
      >
        <h4 class="font-sans text-black text-18 sm:text-20 capsize lg:text-24">
          {{ section }}
        </h4>
        <div class="grid grid-cols-2 gap-12">
          <div v-for="item in items" :key="item.name">
            <img
              class="w-full aspect-[3/2] object-cover"
              v-if="item.image"
              :src="`/mock-images/${item.image}`"
              alt=""
            />
            <div
              class="flex flex-col justify-center items-center gap-y-16 w-full aspect-[3/2] bg-neutral-50 border border-neutral-200"
              v-else
            >
              <svg class="w-24 h-24">
                <use
                  :href="`#${item.name.replace(/ /g, '-').toLowerCase()}-icon`"
                />
              </svg>
              <Text>{{ item.name }}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>
