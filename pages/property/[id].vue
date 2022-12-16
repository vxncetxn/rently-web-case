<script setup>
import { computed } from "vue";
import localData from "~/data.json";

definePageMeta({
  validate: async (route) => {
    return localData.map((d) => d.id).includes(parseInt(route.params.id));
  },
});

const data = useData();
const route = useRoute();
const property = data.value.find((d) => d.id === parseInt(route.params.id));

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
  <SecondaryBar>
    <div
      class="flex items-center justify-between h-full gap-x-16 sm:gap-x-20 lg:gap-x-24"
    >
      <NuxtLink
        class="flex items-center gap-x-16 sm:gap-x-20 lg:gap-x-24"
        to="/"
      >
        <svg class="w-24 h-24 shrink-0">
          <use href="#chevron-left-icon" />
        </svg>
        <Text color="grey">Back to all listings</Text>
      </NuxtLink>
      <div class="flex gap-x-16 sm:gap-x-20 lg:gap-x-24">
        <CustomLink :to="`/property/edit/${route.params.id}`">Edit</CustomLink>
        <CustomLink to="">Share</CustomLink>
      </div>
    </div>
  </SecondaryBar>
  <Container
    ><div class="flex flex-col px-16 py-48 gap-y-24 sm:px-40 lg:px-64">
      <HeaderOne>{{ title }}</HeaderOne>
      <Text size="lg" color="grey">{{ fullAddress }}</Text>
      <div class="flex flex-col mt-40 lg:flex-row gap-x-32">
        <div class="flex flex-col w-full lg:w-3/5 gap-y-48">
          <img
            class="object-cover w-full rounded-4"
            :src="`/mock-images/${property.image}`"
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
          class="flex flex-col gap-y-40 mt-96 lg:mt-0 sticky top-[calc(var(--bars-h-lg)+32px)] w-full lg:w-2/5 bg-neutral-50 h-[calc(100vh-var(--bars-h-lg)-64px)] rounded-4 border border-neutral-200 px-24 sm:px-32 lg:px-40 py-32"
        >
          <div class="flex items-end gap-x-12">
            <p class="font-serif text-40 lg:text-48 capsize">
              ${{ property.terms.price }}
            </p>
            <Text size="lg" color="grey">per month*</Text>
          </div>
          <ul class="flex flex-col gap-y-24">
            <BulletListItem
              ><Text
                >Lease term of
                <span class="underline"
                  >{{ property.terms.period }} months</span
                ></Text
              ></BulletListItem
            >
            <BulletListItem
              ><Text
                >Security deposit of
                <span class="underline"
                  >{{ property.terms.deposit }} months</span
                ></Text
              ></BulletListItem
            >
            <BulletListItem>
              <Text v-if="property.terms.dipClause.isPresent"
                >Diplomatic clause with notice period of
                <span class="underline"
                  >{{ property.terms.dipClause.noticePeriod }} months</span
                ></Text
              >
              <Text v-else>No diplomatic clause</Text>
            </BulletListItem>
            <BulletListItem
              ><Text v-if="property.terms.maintenance.isIncluded"
                >Maintenance included,
                <span v-if="property.terms.maintenance.liability > 0"
                  >liable
                  <span class="underline"
                    >up till ${{ property.terms.maintenance.liability }}</span
                  ></span
                ><span v-else>no additional charges</span></Text
              ><Text v-else>Maintenance not included</Text></BulletListItem
            >
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
    </div></Container
  >
</template>
