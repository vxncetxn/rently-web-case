<script setup>
import { ref } from "vue";
import MagnifyingGlassIcon from "~/assets/icons/magnifying-glass.svg";

const isOpen = ref(false);
const openHandler = () => (isOpen.value = true);
const closeHandler = () => (isOpen.value = false);
</script>

<template>
  <div
    class="flex items-center gap-x-16 sticky top-[var(--navbar-h-def)] z-20 w-screen h-[var(--secbar-h-def)] border-b border-neutral-200 px-16 bg-white focus-within:shadow-lg sm:gap-x-20 lg:gap-x-24 sm:h-[var(--secbar-h-sm)] lg:h-[var(--secbar-h-lg)] sm:top-[var(--navbar-h-sm)] lg:top-[var(--navbar-h-lg)] sm:px-40 lg:px-64"
  >
    <MagnifyingGlassIcon class="w-24 h-24 shrink-0" />
    <input
      class="w-full font-sans text-black text-16 capsize focus:outline-none sm:text-18 lg:text-20"
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
