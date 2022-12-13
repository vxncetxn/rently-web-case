<script setup>
import RentlyLogomark from "~/assets/rently-logomark.svg";
</script>

<template>
  <nav
    class="sticky top-0 z-10 w-screen h-48 border-b border-[#EBEBEB] grid grid-cols-3 items-center px-16 bg-white sm:h-64 lg:h-80 sm:px-40 lg:px-64"
    role="navigation"
    aria-label="main navigation"
  >
    <ul class="flex gap-x-16 sm:gap-x-20 lg:gap-x-24">
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/">About</CustomLink>
      </li>
    </ul>
    <div class="justify-self-center">
      <RentlyLogomark class="w-24 sm:w-32 lg:w-40" />
    </div>
    <div class="justify-self-end">
      <CustomLink to="/">Login</CustomLink>
    </div>
  </nav>
</template>
