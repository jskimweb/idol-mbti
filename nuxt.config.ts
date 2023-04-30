export default defineNuxtConfig({
  app: {
    head: {
      title: '아이돌 MBTI',
      meta: [
        { name: 'title', content: '아이돌 MBTI' },
        { name: 'description', content: '나랑 같은 MBTI를 가진 아이돌은 누구일까?' },
      ],
    },
  },
  css: ['~/assets/css/main.scss'],
  modules: [
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-2989723158324203',
      },
    ],
  ],
  runtimeConfig: {
    public: {
      supabaseUrl: '',
      supabaseKey: '',
    },
  },
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
