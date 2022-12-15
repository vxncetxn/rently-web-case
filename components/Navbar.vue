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
    <NuxtLink class="relative flex group justify-self-center" to="/">
      <svg
        class="w-24 h-[31px] transition-transform duration-[200ms] ease-[cubic-bezier(0.45,0,0.55,1)] sm:w-32 lg:w-40 sm:h-[36px] lg:h-40 group-hover:-translate-x-[34px] group-hover:sm:-translate-x-[44px] group-hover:lg:-translate-x-[56px]"
      >
        <use href="#rently-logomark" />
      </svg>
      <svg
        class="absolute bottom-0 -left-24 opacity-0 w-[60px] h-[27px] sm:w-[83px] lg:w-[106px] sm:h-[32px] lg:h-[35px] group-hover:opacity-100 group-hover:translate-x-20 transition-all duration-[200ms] ease-[cubic-bezier(0.45,0,0.55,1)]"
      >
        <use href="#rently-wordmark" />
      </svg>
    </NuxtLink>
    <div class="justify-self-end">
      <CustomLink to="/">Login</CustomLink>
    </div>
  </nav>
</template>
