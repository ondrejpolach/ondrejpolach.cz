<template>
  <v-container fluid fill-height class="portfolio pa-0 d-flex">
    <v-container>
      <v-row>
        <v-col>
          <v-timeline class="d-none d-md-block">
            <v-timeline-item
              v-for="(project, i) in projects"
              :key="i"
              :color="project.color"
            >
              <template #opposite>
                <span class="font-weight-bold">{{ project.title }}</span>
              </template>
              <v-card class="elevation-2">
                <v-img
                  v-if="project.logo"
                  :position="project.position"
                  height="250"
                  :src="project.logo"
                />
                <v-card-title class="headline">
                  {{ project.name }}
                </v-card-title>
                <v-card-text>
                  {{ project.description }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          <v-card v-for="(project, i) in projects" :key="i" class="elevation-2 d-display d-md-none my-10">
            <v-img
              v-if="project.logo"
              :position="project.position"
              height="250"
              :src="project.logo"
            />
            <v-card-title class="headline">
              <span class="font-weight-bold pr-5">{{ project.title }}</span> {{ project.name }}
            </v-card-title>
            <v-card-text>
              {{ project.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          title: '2021 / 01',
          color: 'success',
          name: 'Start as freelancer',
          logo: require('~/assets/hero.png'),
          position: 'center 30%',
          description:
            'After 4 months of trying out various work as contractor, I decided to take the next step - start own business and go on a freelance journey. So far partly with the current job.'
        },
        {
          title: '2021 / 04',
          name: 'MJC Zlín ordering and picking system',
          color: 'success',
          logo: require('~/assets/velo-mjc-hero.png'),
          position: 'top center',
          description: `I developed multi-step ordering system for sales department of MJC Zlín - leading distributor of hairdressing supplies in Czech republic. 
                                  System also contains module for picking wares from stock based on created orders. Support also generation of invoices for external accounting system.
                                  From technologic point of view, this system is hosting in Firebase project - cloud functions, firestore, CDN hosting for frontend written in Vue.`
        },
        {
          title: '2021 / 09',
          name: 'Website for Patrik Pšeja',
          color: 'success',
          logo: require('~/assets/patrik_pseja_hero.png'),
          position: 'top center',
          description: 'My first freelance web design for the greatest professional photographer I know. The basis of the website is Wordpress with the Novo template. But as usual, it is adjusted as much as possible.'
        },
        {
          title: '2021 / 10',
          name: 'MeHub starting',
          color: 'success',
          logo: require('~/assets/mehub_hero.png'),
          position: 'top center',
          description: `MeHub is platform of add-ons for #1 e-commerce solution named Shoptet. I am glad to work on this amazing platform with Jirka Galandr. Jirka is business and marketing leader in this job and I am technical leader.
                         It's multipart solution backended by cloud functions, no sql database, with frontend components in react for e-shops and with administation web application based on Vue with composition API.
                         Currently there is first add-on: Bonus system. Others will be adding in next months.`
        },
        {
          title: '2022 / 04',
          color: 'primary',
          name: 'Work in progress',
          description:
            'Sometimes refactoring brings new ideas which are converted to new brand or product. It was happen. Proof of concept will transform to new market change product.'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Ondřej Polách | Portfolio'
        }
      ]
    }
  }
}
</script>

<style >
.portfolio {
  background: #fff;
}
</style>
