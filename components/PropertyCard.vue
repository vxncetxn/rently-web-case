<script setup>
import { computed } from "vue";
import { string, bool, shape, oneOf, integer, arrayOf } from "vue-types";

const props = defineProps({
  property: shape({
    id: integer(),
    image: string(),
    owner: shape({
      name: string(),
      image: string(),
    }),
    terms: shape({
      price: integer(),
      period: integer(),
      deposit: integer(),
      dipClause: {
        isPresent: bool(),
        noticePeriod: integer(),
      },
      maintenance: {
        isIncluded: bool(),
        liability: integer(),
      },
    }),
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
    ),
  }).isRequired,
});

const title = computed(() => {
  return props.property.isWholeHouse
    ? `${props.property.numRooms}-Room ${props.property.propertyType} at ${props.property.address.locale}`
    : `Room within ${props.property.propertyType} at ${props.property.address.locale}`;
});
const fullAddress = computed(() => {
  return `${props.property.address.block} ${props.property.address.street} #${props.property.address.floor}-${props.property.address.unit}, S(${props.property.address.postalCode})`;
});
</script>

<template>
  <NuxtLink :to="`/property/${property.id}`"
    ><div class="px-8 py-16 bg-white sm:px-20 lg:px-32 hover:bg-teal-50">
      <div class="flex flex-col gap-32 sm:flex-row">
        <img
          class="w-full sm:w-2/5 aspect-[3/2] rounded-8"
          :src="`/mock-images/${property.image}`"
          :alt="`Cover image for ${title}`"
        />
        <div class="flex flex-col gap-y-16">
          <HeaderThree>
            {{ title }}
          </HeaderThree>
          <Text size="sm" color="grey">{{ fullAddress }}</Text>
          <div class="flex flex-wrap mt-24 sm:mt-auto gap-x-8 gap-y-12">
            <Text size="sm" color="grey">{{
              property.isWholeHouse ? "Whole House" : "Single Room"
            }}</Text>
            <Text size="sm" color="grey">·</Text>
            <Text size="sm" color="grey"
              >{{ property.area.sqft }} sqft / {{ property.area.sqm }} sqm</Text
            >
            <Text size="sm" color="grey">·</Text>
            <Text size="sm" color="grey">{{
              property.items.length > 1
                ? `${property.items.length} items`
                : property.items.length === 1
                ? "1 item"
                : "No items"
            }}</Text>
          </div>
        </div>
      </div>
    </div></NuxtLink
  >
</template>
