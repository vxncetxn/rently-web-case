<script setup></script>

<template>
  <Searchbar />
  <div class="flex">
    <div class="flex flex-col p-32 shrink-0">
      <p class="font-sans text-20 text-[#7A7A7A] pl-32">
        Displaying 108 apartments
      </p>
      <div class="flex flex-col mt-16 gap-y-16">
        <ApartmentCard
          title="4-Room HDB at Bukit Timah"
          address="383 Bukit Timah Rd #19-07, S(310856)"
          :area="{ sqft: 1001, sqm: 93 }"
          numItems="12"
        />
        <ApartmentCard
          title="1 Room in Condo at Geylang"
          address="64 Mattar Rd #04-43, S(322468)"
          :area="{ sqft: 215, sqm: 20 }"
          numItems="8"
        />
        <ApartmentCard
          title="4-Room HDB at Serangoon"
          address="2 Serangoon Gardens #06-33, S(300461)"
          :area="{ sqft: 1205, sqm: 112 }"
          numItems="20"
        />
        <ApartmentCard
          title="5-Room HDB at Choa Chu Kang"
          address="46 Choa Chu Kang Loop #24-02, S(311899)"
          :area="{ sqft: 1260, sqm: 117 }"
          numItems="17"
        />
      </div>
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
