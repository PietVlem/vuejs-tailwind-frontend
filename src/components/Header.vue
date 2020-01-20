<template>
  <div class="header-block">
    <Navigation />
    <img class="w-full" alt="Vue logo" src="../assets/images/header-image.png">
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Header',
  props: {
    msg: String
  },
  components:{
      Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
