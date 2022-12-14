<script setup>
import { string, shape, oneOf, integer, arrayOf } from "vue-types";
import HairdryerIcon from "~/assets/icons/hairdryer.svg";

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
        <HairdryerIcon class="w-24" />
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
              <HairdryerIcon class="w-24" />
              <Text>{{ item.name }}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>

  <!-- <div class="relative flex flex-col gap-y-40 max-h-[720px] overflow-hidden">
    <div
      class="absolute bottom-0 left-0 w-full h-240 bg-gradient-to-b from-white/0 to-white/100"
    ></div>
    <div
      class="flex flex-col gap-y-24"
      v-for="[section, items] in Object.entries(sectionedInventory).filter(
        ([_, items]) => items.length
      )"
      :key="section"
    >
      <HeaderThree>{{ section }}</HeaderThree>
      <div class="flex flex-wrap items-end gap-24">
        <div
          class="flex flex-col gap-y-24 w-[calc((100%-40px)/2)]"
          v-for="item in items.sort((a, b) => {
            if (b.image && !a.image) {
              return 1;
            } else {
              return -1;
            }
          })"
          :key="item.name"
        >
          <img
            class="w-full aspect-[3/2] object-cover"
            v-if="item.image"
            :src="`/mock-images/${item.image}`"
            alt=""
          />
          <div
            class="flex flex-col justify-center items-center gap-y-16 w-full aspect-[3/2] bg-neutral-50"
            v-else
          >
            <HairdryerIcon class="w-24" />
            <Text>{{ item.name }}</Text>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
