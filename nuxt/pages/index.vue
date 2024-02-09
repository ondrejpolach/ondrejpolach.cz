<template>
  <client-only>
    <Hero />
  </client-only>
</template>

<script>
import Hero from '../components/hero.vue'
export default {
  components: {
    Hero
  },

  head () {
    return {
      title: 'About me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Ondřej Polách | IT Consultant | Full-stack developer'
        }
      ]
    }
  }
}
</script>
