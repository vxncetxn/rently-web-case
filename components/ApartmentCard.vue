<script setup>
import { computed } from "vue";

const props = defineProps(["apartment"]);

const title = computed(() => {
  return `${props.apartment.numRooms}-Room ${props.apartment.propertyType} at ${props.apartment.address.locale}`;
});
</script>

<template>
  <div class="px-32 py-16 bg-white hover:bg-teal-50">
    <div class="flex gap-x-32">
      <img
        class="w-[240px] aspect-[3/2] rounded-8"
        :src="`/mock-images/${apartment.image}.webp`"
        :alt="`Cover image for ${title}`"
      />
      <div class="flex flex-col">
        <p class="font-sans text-24 capsize">
          {{ title }}
        </p>
        <p class="font-sans text-18 capsize text-[#7A7A7A] mt-16">
          {{ apartment.address.block }} {{ apartment.address.street }} #{{
            apartment.address.floor
          }}-{{ apartment.address.unit }}, S({{ apartment.address.postalCode }})
        </p>
        <div
          class="flex font-sans text-18 capsize text-[#7A7A7A] mt-auto space-x-8"
        >
          <p>{{ apartment.area.sqft }} sqft / {{ apartment.area.sqm }} sqm</p>
          <p>·</p>
          <p>{{ apartment.items }} items</p>
        </div>
      </div>
    </div>
  </div>
</template>
