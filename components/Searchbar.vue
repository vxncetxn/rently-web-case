<script setup>
import { ref } from "vue";
import MagnifyingGlassIcon from "~/assets/icons/magnifying-glass.svg";

const isOpen = ref(false);
const openHandler = () => (isOpen.value = true);
const closeHandler = () => (isOpen.value = false);
</script>

<template>
  <div
    class="flex items-center gap-x-24 sticky top-80 z-10 w-screen h-64 border-b border-[#EBEBEB] px-64 bg-white focus-within:shadow-lg"
  >
    <MagnifyingGlassIcon class="w-24 h-24" />
    <input
      class="w-full font-sans text-black text-20 capsize focus:outline-none"
      placeholder="Search location, house type, etc."
    />
    <SecondaryButton @click="openHandler">Inventory</SecondaryButton>
    <PrimaryButton>Search</PrimaryButton>
  </div>
  <Modal
    :isOpen="isOpen"
    :close-handler="closeHandler"
    title="Inventory Filters"
  >
    <div class="h-[300px] flex justify-end items-end">
      <PrimaryButton>Apply inventory filters</PrimaryButton>
    </div>
  </Modal>
</template>
