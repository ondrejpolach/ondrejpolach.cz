<template>
    <v-container fluid fill-height class="blog pa-0 align-start">
        <v-container>
            <v-row>
                <v-col sm="12" md="12">
                    <v-container v-if="posts.length == 0">
                        <v-alert class="align-self-start mt-3" type="warning">
                            Nothing is here, but coming soon.
                        </v-alert>
                    </v-container>
                    <v-container v-else>
                        <v-row>
                            <v-col
                                v-for="post in posts"
                                :key="post.id"
                                sm="12"
                                md="4"
                            >
                                <v-card>
                                    <div class="d-flex justify-end">
                                        <v-chip label x-small class="ma-2">
                                            {{ formatDate(post.published_at) }}
                                        </v-chip>
                                    </div>
                                    <v-img contain :src="post.imageUrl" />

                                    <v-card-title
                                        class="text-subtitle-1 font-weight-bold primary--text"
                                    >
                                        {{ post.name }}
                                    </v-card-title>

                                    <v-card-subtitle>
                                        <v-chip
                                            v-for="tag in post.tags"
                                            :key="tag.name"
                                            small
                                            outlined
                                            class="mr-2"
                                        >
                                            {{ tag.name }}
                                        </v-chip>
                                    </v-card-subtitle>

                                    <v-expand-transition>
                                        <div>
                                            <v-divider />

                                            <v-card-text>
                                                {{ post.description }}
                                            </v-card-text>
                                        </div>
                                    </v-expand-transition>

                                    <v-card-actions>
                                        <v-btn
                                            color="primary"
                                            text
                                            nuxt
                                            :to="'/blog/' + post.id"
                                        >
                                            Read
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <!-- <v-col sm="12" md="2">
          <v-container>
            <v-card>
              <v-card-title>
                <span class="text-h6">Tags</span>
              </v-card-title>
              <v-card-text>
                <v-chip-group column>
                  <div v-for="tag in tags" :key="tag.id">
                    <v-chip small outlined>
                      {{ tag.name }}
                    </v-chip>
                  </div>
                </v-chip-group>
              </v-card-text>
            </v-card>
          </v-container>
        </v-col> -->
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import moment from "moment";
import postsQuery from "~/apollo/queries/post/posts";
import tagsQuery from "~/apollo/queries/tag/tags";
export default {
    data() {
        return {
            posts: [],
            tags: [],
        };
    },

    async fetch() {
        const { app } = this.$nuxt.context;
        try {
            let result = await app.apolloProvider.defaultClient.query({
                query: postsQuery,
            });
            this.posts = result.data.posts;
            result = await app.apolloProvider.defaultClient.query({
                query: tagsQuery,
            });
            this.tags = result.data.tags;
        } catch (error) {
            console.error(error);
        }
    },

    methods: {
        formatDate(date) {
            return moment(date).format("DD.MM.YYYY");
        },
    },

    fetchKey: "blog",

    head() {
        return {
            title: "Blog",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Ondřej Polách | my blog",
                },
            ],
        };
    },
};
</script>

<style >
.blog {
    background: #fff;
}
</style>
