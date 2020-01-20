<template>
  <div class="container m-auto">
    <div class="w-1/2 m-auto mb-32 mt-48 relative">
        <img class="absolute wim-interview" alt="Vue logo" src="../assets/images/wim-interview.png">
        <img class="" alt="Vue logo" src="../assets/images/movie.png">
        <p><a class="default-link" href="#">Bekijk alle interviews</a></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Movie',
  props: {
    msg: String
  },
  components:{
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
