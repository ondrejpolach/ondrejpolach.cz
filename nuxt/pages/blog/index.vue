<template>
    <v-container fluid fill-height class="blog pa-0 align-start">
        <v-container v-if="loaded">
            <v-row>
                <v-col sm="12" md="10">
                    <v-container v-if="posts.length == 0">
                        <v-alert class="align-self-start mt-3" type="warning">
                            Nothing is here, but coming soon.
                        </v-alert>
                    </v-container>
                    <v-container v-else>
                        <v-row>
                            <v-col
                                v-for="post in localFilteredPosts"
                                :key="post.id"
                                sm="12"
                                md="4"
                            >
                                <v-card>
                                    <v-img contain :src="post.imageUrl" />

                                    <v-card-title>
                                        {{ post.name }}
                                    </v-card-title>
                                    
                                    <v-card-subtitle>
                                        <v-chip
                                            v-for="tag in post.tags"
                                            :key="tag.name"
                                            small
                                            outlined
                                            class="mr-2 mt-2"
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
                                        <v-spacer></v-spacer>
                                        <v-chip
                                            label
                                            x-small
                                            class="ma-2"
                                            color="info"
                                        >
                                            {{ formatDate(post.published_at) }}
                                        </v-chip>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col sm="12" md="2">
                    <v-container>
                        <v-card>
                            <v-card-title>
                                <span class="text-h6">Tags</span>
                            </v-card-title>
                            <v-card-text>
                                <v-chip-group
                                    column
                                    multiple
                                    v-model="selectedTags"
                                >
                                    <div v-for="tag in tags" :key="tag.id">
                                        <v-chip filter small outlined>
                                            {{ tag.name }}
                                        </v-chip>
                                    </div>
                                </v-chip-group>
                            </v-card-text>
                        </v-card>
                    </v-container>
                </v-col>
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
            selectedTags: [],            
            loaded: false,
        };
    },

    

    head() {
        return {
            title: "Developer blog",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Ondřej Polách | Blog",
                },
            ],
        };
    },

    computed: {
        app() {
            const { app } = this.$nuxt.context;
            return app;
        },
        localFilteredPosts() {
            return this.posts.filter((p) => {
                const tags = this.selectedTags.map(
                    (tid) => this.tags[tid].name
                );
                if (tags.length == 0) {
                    return true;
                } else {
                    for (let i = 0; i < tags.length; i++) {
                        if (
                            p.tags.filter((t) => t.name == tags[i]).length > 0
                        ) {
                            console.log("found");
                            return true;
                        }
                    }
                    return false;
                }
            });
        },
    },

    methods: {
        formatDate(date) {
            return moment(date).format("DD.MM.YYYY");
        },

        async loadPosts() {
            let result = await this.app.apolloProvider.defaultClient.query({
                query: postsQuery,
                // variables: {
                //     tags: this.selectedTags.map((tid) => this.tags[tid].name),
                // },
            });
            this.posts = result.data.posts;
            this.loaded = true;
        },

        async loadTags() {
            const result = await this.app.apolloProvider.defaultClient.query({
                query: tagsQuery,
            });
            this.tags = result.data.tags;
        },
    },

    async fetch() {
        await this.loadTags();
        await this.loadPosts();
    },
    fetchKey: "blog",
};
</script>

<style >
.blog {
    background: #fff;
}
</style>
