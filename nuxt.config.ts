// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],
  modules: ['@nuxtjs/device'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/css/mixins.scss";',
        },
      },
    },
  },
});
