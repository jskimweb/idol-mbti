export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],
  modules: [
    '@nuxtjs/device',
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-2989723158324203',
      },
    ],
  ],
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
