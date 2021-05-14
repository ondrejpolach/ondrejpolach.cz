<template>
    <v-container fluid fill-height class="portfolio pa-0 d-flex ">
        <v-container>
            <v-row>
                <v-col>
                    <v-timeline>
                        <v-timeline-item
                            v-for="(project, i) in projects"
                            :key="i"
                            small
                            :color="project.color"
                        >
                            <template v-slot:opposite>
                                <span class="font-weight-bold">{{ project.title }}</span>
                            </template>
                            <v-card class="elevation-2">
                                <v-img v-if="project.logo"
                                    :position="project.position"
                                    height="250"
                                    :src="project.logo"
                                ></v-img>
                                <v-card-title class="headline">
                                    {{ project.name }}
                                </v-card-title>
                                <v-card-text>{{
                                    project.description
                                }}</v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
export default {
    head() {
        return {
            title: "Portfolio",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Ondřej Polách | Portfolio",
                },
            ],
        };
    },
    data() {
        return {
            projects: [
                {
                    title: "2021 / 01",
                    color: 'success',
                    name: "Start as freelancer",
                    logo: require("~/assets/hero.png"),
                    position: 'center 30%',
                    description: `After 4 months of trying out various work as contractor, I decided to take the next step - start own business and go on a freelance journey. So far partly with the current job.`,
                },
                {
                    title: "2021 / 04",
                    name: "MJC Zlín ordering and picking system",
                    color: 'success',
                    logo: require("~/assets/velo-mjc-hero.png"),
                    position: 'top center',
                    description: `I developed multi-step ordering system for sales department of MJC Zlín - leading distributor of hairdressing supplies in Czech republic. 
                                  System also contains module for picking wares from stock based on created orders. Support also generation of invoices for external accounting system.
                                  From technologic point of view, this system is hosting in Firebase project - cloud functions, firestore, CDN hosting for frontend written in Vue.`,
                },
                  {
                    title: "2021 / 05",
                    color: 'primary',
                    name: "Work in progress",                    
                    description: `Currently working on some interesting projects. Stay tuned.`,
                },
            ],
        };
    },
};
</script>

<style >
.portfolio {
    background: #fff;
}
</style>
