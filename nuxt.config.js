export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false, // Disable Server Side rendering
  server: {
    port: 8000 // default: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tcc-lincer-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;800&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap' }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/style/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/vue-viacep',
    '@/plugins/vue-toastification',
    { src: '@/plugins/modal.js' },
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: "~/plugins/vue2-editor", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt'
  ],

  styleResources: {
    scss: [
      './assets/style/abstracts/_variables.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    'vue-toastification/nuxt',
    'v-wave/nuxt',
    'vue2-editor/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3000'
  },

  auth: {
    strategies: {
      localUser: {
        scheme: 'local',
        token: {
          property: 'token',
          global: true,
          type: ''
        },
        user: {
          property: ''
        },
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get' }
        }
      },
      localCompany: {
        scheme: 'local',
        token: {
          property: 'token',
          global: true,
          type: ''
        },
        user: {
          property: ''
        },
        endpoints: {
          login: { url: '/login-company', method: 'post', propertyName: 'token' },
          logout: { url: '/logout-company', method: 'post' },
          user: { url: '/user-company', method: 'get' }
        }
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/dashboard'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
