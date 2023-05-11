export default defineNuxtConfig({
  app: {
    head: {
      title: '아이돌 MBTI',
      meta: [
        { name: 'title', content: '아이돌 MBTI' },
        { name: 'description', content: '나랑 같은 MBTI를 가진 아이돌은 누구일까?' },
        { name: 'keywords', content: '아이돌, MBTI, 아이돌 MBTI' },
        { property: 'og:title', content: '아이돌 MBTI' },
        {
          property: 'og:description',
          content: '나랑 같은 MBTI를 가진 아이돌은 누구일까?',
        },
        {
          property: 'og:image',
          content:
            'https://zqvsucyrjbczmyguvlgv.supabase.co/storage/v1/object/public/etc/og-image.png',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://idol-mbti.vercel.app/' },
        { name: 'twitter:title', content: '아이돌 MBTI' },
        {
          name: 'twitter:description',
          content: '나랑 같은 MBTI를 가진 아이돌은 누구일까?',
        },
      ],
    },
  },
  css: ['~/assets/css/main.scss'],
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
