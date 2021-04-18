<template>
  <v-container
    v-if="post"
    fluid
    fill-height
    class="post pa-0 align-start justify-center"
  >
    <v-container>
      <v-row class="justify-center">
        <v-col sm="12" md="8" class="pt-0">
          <v-sheet color="white" elevation="0" rounded class="pa-5">
            <img :src="post.image.url">
          </v-sheet>
          <v-sheet color="white" elevation="0" rounded class="pa-5">
            <div class="my-3">
              <span class="my-4 text-h2">
                {{ post.name }}
              </span>
            </div>
            <div class="pb-10">
              <v-chip x-small class="mr-2" color="info">
                {{ formatDate(post.published_at) }}
              </v-chip>
              <v-chip
                v-for="tag in post.tags"
                :key="tag.name"
                x-small
                outlined
                class="mr-2"
              >
                {{ tag.name }}
              </v-chip>
            </div>
            <div class="content pt-10" v-html="content" />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import moment from 'moment'
import postQuery from '~/apollo/queries/post/post'

export default {
  data () {
    return {
      post: null,
      content: null
    }
  },

  async fetch () {
    const { app, route } = this.$nuxt.context
    try {
      const { data } = await app.apolloProvider.defaultClient.query({
        query: postQuery,
        variables: {
          id: route.params.id
        }
      })
      this.post = data.post
      this.content = this.$md.render(
        await this.prepareContentForGistEmbed(this.post.content)
      )
    } catch (error) {
      console.error(error)
    }
  },

  fetchKey: 'post',

  head () {
    return {
      title: this.post ? this.post.name : 'příspěvek',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Ondřej Polách | ${
                        this.post ? this.post.name : 'příspěvek'
                    }`
        }
      ]
    }
  },

  methods: {
    formatDate (date) {
      return moment(date).format('DD.MM.YYYY')
    },

    removeNewLinesAndSpacesAfter (str) {
      return str.replace(/\n\s*/g, '')
    },

    async prepareContentForGistEmbed (content) {
      let c = content
      const r = /\[embed-gist\]\(.*\)/g
      const m = content.match(r)
      if (m) {
        for (let i = 0; i < m.length; i++) {
          const url = m[i]
            .replace('[embed-gist](', '')
            .replace(')', '')
          let res
          if (process.client) {
            res = await this.$jsonp(url)
          } else {
            res = await this.$axios.$get(url)
          }

          const gist = this.removeNewLinesAndSpacesAfter(res.div)
          c = c.replace('[embed-gist](' + url + ')', gist)
        }
      }
      return c
    }
  }
}
</script>

<style>
.post {
    background: #fff;
}

.post img {
    width: 100%;
}

.content h2 {
    margin: 15px 0 10px;
}
.content h3 {
    margin: 15px 0 5px;
}
.content p {
    margin-bottom: 10px;
}
.content .gist {
    margin: 20px 0;
}
</style>
