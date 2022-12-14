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
        <InventoryView :inventory="property.items" />
      </div>
      <div
        class="flex flex-col sticky top-[calc(var(--bars-h-lg)+32px)] w-2/5 bg-neutral-50 h-[calc(100vh-var(--bars-h-lg)-64px)] rounded-4 border border-neutral-200 p-40"
      >
        <div class="flex items-end gap-x-12">
          <p class="font-serif text-48 capsize">$2178</p>
          <Text size="lg" color="grey">per month*</Text>
        </div>
        <ul class="flex flex-col mt-32 gap-y-20">
          <li class="flex items-center gap-x-12">
            <span class="w-8 h-8 bg-black"></span>
            <Text>Lease term of <span class="underline">2 years</span></Text>
          </li>
          <li class="flex items-center gap-x-12">
            <span class="w-8 h-8 bg-black"></span>
            <Text
              >Security deposit of <span class="underline">2 months</span></Text
            >
          </li>
          <li class="flex items-center gap-x-12">
            <span class="w-8 h-8 bg-black"></span>
            <Text
              >Diplomatic clause with notice period of
              <span class="underline">60 days</span></Text
            >
          </li>
          <li class="flex items-center gap-x-12">
            <span class="w-8 h-8 bg-black"></span>
            <Text
              >Maintenance included, liable
              <span class="underline">up till $150</span></Text
            >
          </li>
        </ul>
        <div class="flex flex-col items-end mt-auto text-right gap-y-20">
          <PrimaryButton>Make enquiry</PrimaryButton
          ><Text size="sm" color="grey"
            >Listed fee is before any additional charges such as utilities and
            stamp fees*</Text
          >
        </div>
      </div>
    </div>
  </div>
</template>
