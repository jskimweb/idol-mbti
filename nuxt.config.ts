export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],
  modules: ['@nuxtjs/device'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/css/variables.scss";',
        },
      },
    },
  },
});
