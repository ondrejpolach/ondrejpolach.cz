<template>
  <v-app>
    <Menu>
      <template #activator="{ on }">
        <v-app-bar
          fixed
          dense
          flat
          :class="onHomepage ? 'custom-app-bar' : ''"
        >
          <v-btn
            v-if="isArticle"
            icon
            nuxt
            small
            class="ml-1 back-to-block-btn"
            :to="'/blog'"
            color="primary"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-app-bar-title>{{ pageTitle }}</v-app-bar-title>
          <v-spacer />
          <v-app-bar-nav-icon color="primary" @click="on" />
        </v-app-bar>
      </template>
    </Menu>

    <v-main class="mt-10">
      <nuxt />
    </v-main>

    <Footer v-if="!onHomepage" />
  </v-app>
</template>

<script>
import Menu from '../components/menu.vue'
import Footer from '~/components/footer.vue'
export default {
  components: {
    Menu,
    Footer
  },

  data () {
    return {}
  },

  computed: {
    onHomepage () {
      return this.$nuxt.$route.path === '/'
    },

    isArticle () {
      return this.$nuxt.$route.name === 'blog-id'
    },

    pageTitle () {
      if (this.$nuxt.$route.path === '/') {
        return ''
      } else if (this.$nuxt.$route.path.includes('/blog')) {
        return 'Developer blog | Ondřej Polách'
      } else if (this.$nuxt.$route.path.includes('/portfolio')) {
        return 'Portfolio | Ondej Polách'
      } else {
        return ''
      }
    }
  },
  
  mounted() {
      if(process.client) {
          this.$fire.analytics.setAnalyticsCollectionEnabled();
      }
  }
}
</script>

<style >
html {
    overflow-y: auto;
}

.back-to-block-btn::before {
    opacity: 0 !important;
}

.v-main__wrap,
.custom-app-bar {
    background-image: url("~/assets/background.png");
    background-repeat: repeat;
}
</style>
