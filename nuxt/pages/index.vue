<template>
    <client-only>
        <Hero />
    </client-only>
</template>

<script>
import Hero from "../components/hero.vue";
export default {
    components: {
        Hero,
    },

    head() {
      return {
        title: 'About me',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Ondřej Polách | I am simply the web developer'
          }
        ]
      }
    }
};
</script>
