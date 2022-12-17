<template>
  <div
    class="flex items-center sticky top-[var(--navbar-h-def)] z-20 w-screen h-[var(--secbar-h-def)] border-b border-neutral-200 px-16 bg-white focus-within:shadow-lg gap-x-8 sm:gap-x-16 lg:gap-x-24 sm:h-[var(--secbar-h-sm)] lg:h-[var(--secbar-h-lg)] sm:top-[var(--navbar-h-sm)] lg:top-[var(--navbar-h-lg)] sm:px-40 lg:px-64"
  >
    <svg class="w-24 h-24 shrink-0">
      <use href="#magnifying-glass-icon" />
    </svg>
    <input
      class="w-full font-sans text-black text-16 capsize focus:outline-none sm:text-18 lg:text-20"
      placeholder="Search location, house type, etc."
    />
    <PrimaryButton>Search</PrimaryButton>
  </div>
</template>
