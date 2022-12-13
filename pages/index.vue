<script setup>
import data from "../data.json";
</script>

<template>
  <Searchbar />
  <div class="flex flex-col-reverse lg:flex-row">
    <div class="flex flex-col w-full px-8 mt-32 sm:px-20 lg:px-32 lg:w-3/5">
      <div class="px-8 sm:px-20 lg:px-32">
        <Text color="grey">Displaying {{ data.length }} apartments</Text>
      </div>
      <ul class="flex flex-col mt-16 gap-y-16">
        <li v-for="apartment in data" :key="apartment.id">
          <ApartmentCard :apartment="apartment" />
        </li>
      </ul>
    </div>
    <div
      class="lg:sticky h-[calc((100vh-88px)*0.4)] lg:h-[calc(100vh-144px)] top-[144px] w-full lg:w-2/5"
    >
      <img
        class="object-cover w-full h-full"
        src="/map-placeholder.png"
        alt="placeholder for map component"
      />
    </div>
  </div>
</template>
