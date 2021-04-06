<template>
  <v-container fluid fill-height class="portfolio pa-0 align-start">
    <v-container>
      <v-row>
        <v-col>
          <v-alert
            type="warning"
          >
            Nothing is here, but coming soon.
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Ondřej Polách | my web developer's portfolio"
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
