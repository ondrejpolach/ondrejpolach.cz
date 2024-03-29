import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Ondřej Polách',
    title: 'Ondřej Polách',
    htmlAttrs: {
      lang: 'cs'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ondřej Polách | software development & consultation' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-jsonp.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // my generator for dynamic routes in sitemap
    '@/modules/generator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
    '@nuxtjs/sitemap'
  ],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.STRAPI_URL || 'http://localhost:1337/graphql'
      }
    }
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyCyYAzHJhDwtvchEFgRGg9StQULymIeWOU',
      authDomain: 'ondrejpolachcz.firebaseapp.com',
      projectId: 'ondrejpolachcz',
      storageBucket: 'ondrejpolachcz.appspot.com',
      messagingSenderId: '92262910262',
      appId: '1:92262910262:web:c55ed80fcbee663dd94b97',
      measurementId: 'G-QXHG4SN35W'
    },
    services: {
      analytics: true
    }
  },

  sitemap: {
    hostname: 'https://ondrejpolach.cz',
    gzip: true,
    exclude: [],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.amber.darken2
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
