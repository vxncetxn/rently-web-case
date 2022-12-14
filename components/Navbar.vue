<template>
  <nav
    class="sticky top-0 z-20 w-screen h-[var(--navbar-h-def)] border-b border-neutral-200 grid grid-cols-3 items-center px-16 bg-white sm:h-[var(--navbar-h-sm)] lg:h-[var(--navbar-h-lg)] sm:px-40 lg:px-64"
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
      <svg class="w-24 h-24 sm:w-32 lg:w-40 sm:h-32 lg:h-40">
        <use href="#rently-logomark" />
      </svg>
    </div>
    <div class="justify-self-end">
      <CustomLink to="/">Login</CustomLink>
    </div>
  </nav>
</template>
