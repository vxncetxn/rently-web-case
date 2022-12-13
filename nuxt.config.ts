import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/main.css"],
  vite: {
    plugins: [svgLoader()],
  },
});
