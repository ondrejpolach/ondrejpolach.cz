<template>
    <v-app>
        <Menu>
            <template v-slot:activator="{ on }">
                <v-app-bar dense flat :class="onHomepage ? 'custom-app-bar' : ''">
                    <v-app-bar-title>{{pageTitle}}</v-app-bar-title>
                    <v-spacer></v-spacer>
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
import Menu from "../components/menu.vue";

export default {
    components: {
        Menu,
    },

    computed: {
        onHomepage() {
            return this.$nuxt.$route.path == '/';
        },

        pageTitle() {
            if(this.$nuxt.$route.path == '/') {
                return ''
            } else if(this.$nuxt.$route.path.indexOf('/blog') != -1) {
                return 'Blog'
            } else if(this.$nuxt.$route.path.indexOf('/portfolio')!= -1) {
                return 'Portfolio'
            }
        }
    },

    data() {
        return {};
    },
};
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
