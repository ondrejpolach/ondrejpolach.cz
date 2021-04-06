<template>
  <v-container fluid fill-height class="post pa-0 align-start justify-center">
    <v-container>
      <v-row class="justify-center">
        <v-col v-if="post" sm="12" md="6">
          <div class="d-flex justify-space-between">
            <h1 class="my-5">
              {{ post.name }}
            </h1>
            <v-chip label x-small class="ma-2">
              {{ formatDate(post.published_at) }}
            </v-chip>
          </div>
          <v-sheet
            color="white"
            elevation="3"
            rounded
            class="pa-5 mb-5"
          >
            <img :src="post.imageUrl">
          </v-sheet>
          <v-sheet color="white" elevation="1" rounded class="pa-5">
            <div
              class="content"
              v-html="$md.render(post.content)"
            />
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
      post: null
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
          content: `Ondřej Polách | ${this.post ? this.post.name : 'příspěvek'}`
        }
      ]
    }
  },

  methods: {
    formatDate (date) {
      return moment(date).format('DD.MM.YYYY')
    }
  }
}
</script>

<style >
.post {
    background: #fff;
}

.post img {
    width: 100%;
}
</style>
