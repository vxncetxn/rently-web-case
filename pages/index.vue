<script setup>
import data from "../data.json";
</script>

<template>
  <Searchbar />
  <div class="flex">
    <div class="flex flex-col p-32 shrink-0">
      <p class="font-sans text-20 text-[#7A7A7A] pl-32">
        Displaying {{ data.length }} apartments
      </p>
      <ul class="flex flex-col mt-16 gap-y-16">
        <li v-for="apartment in data" :key="apartment.id">
          <ApartmentCard :apartment="apartment" />
        </li>
      </ul>
    </div>
    <div class="sticky h-[calc(100vh-144px)] top-[144px]">
      <img
        class="object-cover w-full h-full"
        src="/map-placeholder.png"
        alt="placeholder for map component"
      />
    </div>
  </div>
</template>
