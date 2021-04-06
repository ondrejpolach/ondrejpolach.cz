<template>
  <v-app>
    <Menu>
      <template #activator="{ on }">
        <v-app-bar dense flat :class="onHomepage ? 'custom-app-bar' : ''">
          <v-btn icon v-if="canBack" @click="$nuxt.$router.push({ path: '/blog' })">
              <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-app-bar-title>{{ pageTitle }}</v-app-bar-title>
          <v-spacer />
          <v-app-bar-nav-icon color="primary" @click="on" />
        </v-app-bar>
      </template>
    </Menu>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Menu from '../components/menu.vue'

export default {
  components: {
    Menu
  },

  data () {
    return {}
  },

  computed: {
    onHomepage () {
      return this.$nuxt.$route.path === '/'
    },

    pageTitle () {
      if (this.$nuxt.$route.path === '/') {
        return ''
      } else if (this.$nuxt.$route.path.includes('/blog')) {
        return 'Blog'
      } else if (this.$nuxt.$route.path.includes('/portfolio')) {
        return 'Portfolio'
      } else {
        return ''
      }
    },

    canBack() {
        return this.$nuxt.$route.path.includes('/blog/')
    }
  }
}
</script>

<style >
html {
    overflow-y: auto;
}

.v-main__wrap, .custom-app-bar {
    background-image: url("~/assets/background.png");
    background-repeat: repeat;
}
</style>
