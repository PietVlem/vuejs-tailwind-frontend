<template>
  <div class="sidebar h-screen sticky top-0">
    <img alt src="../assets/images/insta.png" />
    <img alt src="../assets/images/fb.png" />
    <img alt src="../assets/images/mail.png" />
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
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
