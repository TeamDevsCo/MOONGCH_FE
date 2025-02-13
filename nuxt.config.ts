export default defineNuxtConfig({
  modules: [],
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],

  build: {
    transpile: ["vuetify"],
  },

  compatibilityDate: "2025-02-12",
});
