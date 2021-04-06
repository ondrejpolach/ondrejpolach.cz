<template>
 <v-container fluid fill-height class="post pa-0 align-start">
        <v-container>
            <v-row>
                <v-col v-if="post">
                   <h1 class="my-5">{{post.name}}</h1>
                   <div
                        class="content"
                        v-html="$md.render(post.content)"
                    ></div>                 
                </v-col>               
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import postQuery from "~/apollo/queries/post/post";
export default {

    data() {
        return {
            post: null,
        };
    },

    async fetch() {
        const { app, route } = this.$nuxt.context;
        try {
            const { data } = await app.apolloProvider.defaultClient.query({
                query: postQuery,
                variables: {
                    id: route.params.id
                },
            });
            this.post = data.post;
        } catch (error) {
            console.error(error);
        }
    },

    fetchKey: `post`,
};
</script>

<style >
.post {
    background: #fff;
}
</style>
