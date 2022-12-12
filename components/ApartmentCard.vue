<script setup>
const props = defineProps(["title", "address", "area", "numItems"]);
</script>

<template>
  <div class="px-32 py-16 bg-white hover:bg-teal-50">
    <div class="flex gap-x-32">
      <img
        class="w-[240px] aspect-[3/2] rounded-8"
        src="sample-image-1.webp"
        alt="sample image 1"
      />
      <div class="flex flex-col">
        <p class="font-sans text-24 capsize">{{ title }}</p>
        <p class="font-sans text-18 capsize text-[#7A7A7A] mt-16">
          {{ address }}
        </p>
        <div
          class="flex font-sans text-18 capsize text-[#7A7A7A] mt-auto space-x-8"
        >
          <p>{{ area.sqft }} sqft / {{ area.sqm }} sqm</p>
          <p>·</p>
          <p>{{ numItems }} items</p>
        </div>
      </div>
    </div>
  </div>
</template>
