<script setup></script>

<template>
  <Searchbar />
  <div class="grid grid-cols-2">
    <div class="h-[2000px]"></div>
    <div class="sticky h-[calc(100vh-144px)] top-[144px]">
      <img
        class="w-full h-full object-cover"
        src="/map-placeholder.png"
        alt="placeholder for map component"
      />
    </div>
  </div>
</template>
