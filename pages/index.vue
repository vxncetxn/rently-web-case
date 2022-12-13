<script setup>
import data from "../data.json";
</script>

<template>
  <Searchbar />
  <div class="relative">
    <div
      class="sticky top-[88px] sm:top-[104px] lg:top-[144px] left-0 w-screen h-[calc(100vh-88px)] sm:h-[calc(100vh-104px)] lg:h-[calc(100vh-144px)] flex justify-end"
    >
      <img
        class="object-cover w-full h-[calc((100vh-88px)*0.4)] sm:h-[calc((100vh-104px)*0.4)] lg:w-2/5 lg:h-full"
        src="/map-placeholder.png"
        alt="placeholder for map component"
      />
    </div>
    <div
      class="w-full lg:w-3/5 relative z-10 flex flex-col px-8 py-64 lg:py-32 sm:px-20 lg:px-32 -mt-[calc((100vh-88px)*0.65)] sm:-mt-[calc((100vh-104px)*0.65)] lg:-mt-[calc(100vh-144px)] bg-white rounded-t-32"
    >
      <div class="px-8 sm:px-20 lg:px-32">
        <Text color="grey">Displaying {{ data.length }} apartments</Text>
      </div>
      <ul class="flex flex-col mt-16 gap-y-16">
        <li v-for="apartment in data" :key="apartment.id">
          <ApartmentCard :apartment="apartment" />
        </li>
      </ul>
    </div>
  </div>
</template>
