export default {
  mode: 'universal',
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  target: 'static',
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Give Food a Chance',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Golfo Siozios' },
      {
        hid: 'description',
        name: 'description',
        content:
          '/giv•fōōd•ā•CHans/: Lifestyle allowing food to live up to its full potential by nourishing you & (occasionally) satisfying that sweet tooth.',
      },
      // OpenGraph data (Most widely used)
      { property: 'og:title', content: 'Give Food a Chance' },
      { property: 'og:site_name', content: 'Give Food a Chance' },
      // The list of types is available here: http://ogp.me/#types
      { property: 'og:type', content: 'website' },
      // Should the the same as your canonical link, see below.
      {
        property: 'og:url',
        content: 'https://givefoodachance.com',
      },
      {
        property: 'og:image',
        content: 'https://givefoodachance.com/og-image.jpg',
      },
      // Often the same as your meta description, but not always.
      {
        property: 'og:description',
        content:
          '/giv•fōōd•ā•CHans/: Lifestyle allowing food to live up to its full potential by nourishing you & (occasionally) satisfying that sweet tooth.',
      },

      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:site',
        content: 'https://givefoodachance.com',
      },
      { name: 'twitter:title', content: 'Give Food a Chance' },
      {
        name: 'twitter:description',
        content:
          '/giv•fōōd•ā•CHans/: Lifestyle allowing food to live up to its full potential by nourishing you & (occasionally) satisfying that sweet tooth.',
      },
      // Your twitter handle, if you have one.
      { name: 'twitter:creator', content: '@givefoodachance' },
      {
        name: 'twitter:image',
        content: 'https://givefoodachance.com/og-image.jpg',
      },

      // Google / Schema.org markup:
      { itemprop: 'name', content: 'Give Food a Chance' },
      {
        itemprop: 'description',
        content:
          '/giv•fōōd•ā•CHans/: Lifestyle allowing food to live up to its full potential by nourishing you & (occasionally) satisfying that sweet tooth.',
      },
      {
        itemprop: 'image',
        content: 'https://givefoodachance.com/og-image.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: './plugins/GoogleAnalytics.js',
      mode: 'client',
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/markdownit', '@nuxt/content'],
  markdownit: {
    injected: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
