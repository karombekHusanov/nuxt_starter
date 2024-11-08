// https://nuxt.com/docs/api/configuration/nuxt-config
import { locales } from "./languages/locale-list";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@pinia/nuxt", "@nuxtjs/i18n"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    defaultLocale: "en",
    langDir: "./languages",
    strategy: "prefix",
    locales,
    detectBrowserLanguage: false,
  },

  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
