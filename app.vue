<script setup>
useHead({
  meta: [
    {
      name: "description",
      content:
        "Rently makes renting easier — from signing contracts to checking inventory, everything is all in one convenient place!",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:image",
      content: "/meta-image.jpg",
    },
    {
      name: "og:url",
      content: "https://rently-web-case.pages.dev/",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:image",
      content: "/meta-image-twitter.jpg",
    },
  ],
  link: [
    { rel: "canonical", href: "https://rently-web-case.pages.dev/" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
});
</script>

<template>
  <Spritesheet />
  <NuxtLoadingIndicator color="#99f6e4" />
  <Navbar />
  <NuxtPage />
  <div id="portal"></div>
  <Toast />
</template>
