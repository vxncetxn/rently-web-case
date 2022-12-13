<script setup>
import RentlyLogomark from "~/assets/rently-logomark.svg";
</script>

<template>
  <nav
    class="sticky top-0 z-10 w-screen h-80 border-b border-[#EBEBEB] grid grid-cols-3 items-center px-64 bg-white"
    role="navigation"
    aria-label="main navigation"
  >
    <ul class="flex gap-x-24">
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/">About</CustomLink>
      </li>
    </ul>
    <div class="justify-self-center">
      <RentlyLogomark class="w-40" />
    </div>
    <div class="justify-self-end">
      <CustomLink to="/">Login</CustomLink>
    </div>
  </nav>
</template>
