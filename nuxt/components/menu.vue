<template>
  <div>
    <slot name="activator" :on="on" />
    <v-dialog v-model="active" fullscreen>
      <v-sheet class="fill-height">
        <v-toolbar absolute width="100%" dense flat class="custom-menu">
          <v-toolbar-title>
            <span class="white--text">Ondřej Polách</span>
          </v-toolbar-title>
          <v-spacer />
          <v-btn icon color="primary" @click="active = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container
          fluid
          fill-height
          class="d-flex justify-center align-center custom-menu"
        >
          <v-list class="custom-menu pa-0">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :href="item.link"
              nuxt
              dark
              class="custom-menu"
            >
              <v-list-item-icon>
                <v-icon class="text-h6 text-sm-h5">
                  {{
                    item.icon
                  }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-h6 text-sm-h5">
                  {{
                    item.title
                  }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-container>
      </v-sheet>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'Menu',

  data () {
    return {
      active: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          link: '/'
        },
        {
          icon: 'mdi-account-multiple-plus',
          title: 'Join us',
          link: '/career'
        },
        {
          icon: 'mdi-history',
          title: 'Portfolio and history',
          link: '/portfolio'
        },
        {
          icon: 'mdi-format-text',
          title: 'Some ideas',
          link: '/blog'
        }
      ]
    }
  },

  methods: {
    on () {
      this.active = !this.active
    }
  }
}
</script>

<style >
.custom-menu {
    background-image: url("~/assets/background.png");
    background-repeat: repeat;
}
</style>
