<template>
  <v-footer class="d-flex flex-column">
    <div class="my-2">
      <span class="text-caption">Made at 2021 by Ondřej Polách with <v-icon small color="red">mdi-heart</v-icon> in Zlín</span>
    </div>
    <div class="d-flex justify-center mb-2">
      <span class=" text-caption">2021-{{ new Date().getFullYear() }} | <a href="https://www.ellity.eu" target="_blank">ellity.eu</a> | <a href="https://www.galandr.com" target="_blank">galandr.com</a></span>
    </div>
  </v-footer>
</template>
<script>
export default {
  name: 'Footer',

  data () {
    return {
    }
  }
}
</script>

<style >
</style>
