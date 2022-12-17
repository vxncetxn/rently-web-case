<script setup>
const data = useData();

useHead({
  title: "Properties for Rent in Singapore | rently.sg",
  meta: [
    {
      name: "og:title",
      content: "Properties for Rent in Singapore | rently.sg",
    },
  ],
});
</script>

<template>
  <Searchbar />
  <div class="relative">
    <div
      class="sticky top-[var(--bars-h-def)] sm:top-[var(--bars-h-sm)] lg:top-[var(--bars-h-lg)] left-0 w-screen h-[var(--not-bars-h-def)] sm:h-[var(--not-bars-h-sm)] lg:h-[var(--not-bars-h-lg)] flex justify-end"
    >
      <img
        class="object-cover w-full h-[calc(var(--not-bars-h-def)*0.4)] sm:h-[calc(var(--not-bars-h-sm)*0.4)] lg:w-[calc(100vw-min(64rem,60vw))] lg:h-full"
        src="/mock-images/map-placeholder.png"
        alt="placeholder for map component"
      />
    </div>
    <div
      class="w-full lg:w-3/5 relative z-10 flex flex-col px-8 py-64 lg:py-32 sm:px-20 lg:px-32 -mt-[calc(var(--not-bars-h-def)*0.65)] sm:-mt-[calc(var(--not-bars-h-sm)*0.65)] lg:-mt-[var(--not-bars-h-lg)] bg-white rounded-t-32 max-w-5xl"
    >
      <div class="px-8 sm:px-20 lg:px-32">
        <Text color="grey">Displaying {{ data.length }} properties</Text>
      </div>
      <ul class="flex flex-col mt-16 gap-y-16">
        <li v-for="property in data" :key="property.id">
          <PropertyCard :property="property" />
        </li>
      </ul>
    </div>
  </div>
</template>
