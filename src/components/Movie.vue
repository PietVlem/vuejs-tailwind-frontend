<template>
  <div class="movie-block">
    <div class="container movie-block__wrapper">
      <div class="movie-block__content">
        <img class="movie-block__image" alt="Vue logo" src="../assets/images/wim-interview.png" />
        <img class alt="Vue logo" src="../assets/images/movie.png" />
        <p>
          <a class="default-link" href="#">Bekijk alle interviews</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    msg: String
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
