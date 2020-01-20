<template>
  <div class="nav">
    <div class="nav__logo">
      <img alt src="../assets/images/nav-logo.png" />
    </div>
    <nav class="nav__main-menu">
      <div class="nav__main-items-wrapper">
        <div class="nav__main-menu-items">
          <a href="#">Het chocolademagazijn</a>
          <a href="#">Duurzaamheid</a>
          <a href="#">FAQ</a>
          <a href="#">Partners</a>
          <a href="#">Wim interviewt</a>
          <a href="#">Nieuws</a>
          <a href="#">Contact</a>
        </div>
        <div class="nav__side-menu">
          <div class="nav__side-items-wrapper">
            <a href="#">Jobs</a>
            <a href="#">Pers</a>
          </div>
          <div>
            <img alt src="../assets/images/nav-logo-2.png" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
