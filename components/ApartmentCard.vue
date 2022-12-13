<script setup>
import { computed } from "vue";
import { string, bool, shape, oneOf, integer, arrayOf } from "vue-types";

const props = defineProps({
  apartment: shape({
    id: integer(),
    image: string(),
    isWholeHouse: bool(),
    propertyType: oneOf(["HDB", "Condo", "Landed"]),
    numRooms: integer(),
    address: {
      block: integer(),
      street: string(),
      floor: integer(),
      unit: integer(),
      postalCode: integer(),
      locale: string(),
    },
    area: {
      sqft: integer(),
      sqm: integer(),
    },
    items: arrayOf(
      shape({
        type: string(),
        image: string(),
      })
    ),
  }).isRequired,
});

const title = computed(() => {
  return props.apartment.isWholeHouse
    ? `${props.apartment.numRooms}-Room ${props.apartment.propertyType} at ${props.apartment.address.locale}`
    : `Room within ${props.apartment.propertyType} at ${props.apartment.address.locale}`;
});
</script>

<template>
  <div class="px-8 py-16 bg-white sm:px-20 lg:px-32 hover:bg-teal-50">
    <div class="flex flex-col gap-32 sm:flex-row">
      <img
        class="w-full sm:w-2/5 aspect-[3/2] rounded-8"
        :src="`/mock-images/${apartment.image}.webp`"
        :alt="`Cover image for ${title}`"
      />
      <div class="flex flex-col gap-y-16">
        <HeaderThree>
          {{ title }}
        </HeaderThree>
        <Text size="sm" color="grey"
          >{{ apartment.address.block }} {{ apartment.address.street }} #{{
            apartment.address.floor
          }}-{{ apartment.address.unit }}, S({{
            apartment.address.postalCode
          }})</Text
        >
        <div class="flex flex-wrap mt-24 sm:mt-auto gap-x-8 gap-y-12">
          <Text size="sm" color="grey">{{
            apartment.isWholeHouse ? "Whole House" : "Single Room"
          }}</Text>
          <Text size="sm" color="grey">·</Text>
          <Text size="sm" color="grey"
            >{{ apartment.area.sqft }} sqft / {{ apartment.area.sqm }} sqm</Text
          >
          <Text size="sm" color="grey">·</Text>
          <Text size="sm" color="grey">{{
            apartment.items.length > 1
              ? `${apartment.items.length} items`
              : apartment.items.length === 1
              ? "1 item"
              : "No items"
          }}</Text>
        </div>
      </div>
    </div>
  </div>
</template>
