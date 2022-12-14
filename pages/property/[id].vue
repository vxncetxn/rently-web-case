<script setup>
import { computed } from "vue";
import data from "~/data.json";

definePageMeta({
  validate: async (route) => {
    return data.map((d) => d.id).includes(parseInt(route.params.id));
  },
});

const route = useRoute();
const property = data.find((d) => d.id === parseInt(route.params.id));

const title = computed(() => {
  return property.isWholeHouse
    ? `${property.numRooms}-Room ${property.propertyType} at ${property.address.locale}`
    : `Room within ${property.propertyType} at ${property.address.locale}`;
});
const fullAddress = computed(() => {
  return `${property.address.block} ${property.address.street} #${property.address.floor}-${property.address.unit}, S(${property.address.postalCode})`;
});
</script>

<template>
  <SecondaryBar />
  <div class="flex flex-col px-16 py-48 gap-y-24 sm:px-40 lg:px-64">
    <HeaderOne>{{ title }}</HeaderOne>
    <Text size="lg" color="grey">{{ fullAddress }}</Text>
    <div class="flex mt-40 gap-x-32">
      <div class="flex flex-col w-3/5 gap-y-48">
        <img
          class="object-cover w-full rounded-4"
          :src="`/mock-images/${property.image}.webp`"
          :alt="`Cover image for ${title}`"
        />
        <div class="flex gap-x-24">
          <Avatar
            :src="property.owner.image"
            :alt="`Profile image of ${property.owner.name}`"
          />
          <div class="flex flex-col gap-y-16">
            <Text size="lg">Owned by {{ property.owner.name }}</Text>
            <div class="flex flex-wrap gap-x-8 gap-y-12">
              <Text color="grey">{{
                property.isWholeHouse ? "Whole House" : "Single Room"
              }}</Text>
              <Text color="grey">·</Text>
              <Text color="grey"
                >{{ property.area.sqft }} sqft /
                {{ property.area.sqm }} sqm</Text
              >
              <Text color="grey">·</Text>
              <Text color="grey">{{
                property.items.length > 1
                  ? `${property.items.length} items`
                  : property.items.length === 1
                  ? "1 item"
                  : "No items"
              }}</Text>
            </div>
          </div>
        </div>
        <Divider />
        <HeaderTwo>Inventory</HeaderTwo>
      </div>
      <div
        class="sticky top-[calc(var(--bars-h-lg)+32px)] w-2/5 bg-neutral-100 h-[360px] rounded-4"
      ></div>
    </div>
  </div>
</template>
