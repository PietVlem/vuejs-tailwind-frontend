<template>
  <div class="flex">
      <div class="flex-1 py-16 px-16">
        <h2>
          Het grootste chocolademagazijn?
          <br />Dat komt in Lokeren!
        </h2>
        <p class="w-2/3">
          Het nieuwe Global Distribution Centre zal dienen als Belgische logistieke hub voor de wereldwijde distributie chocolade van Barry Callebaut. Dit gebeurde tot op heden op verschillende locaties in de regio Aalst.
        </p>
        <a href="#" class="default-link">Veelgestelde vragen</a>
      </div>
      <div class="flex-1 py-16 px-16 relative bg-white top-neg150">
        <h2>60.000m² chocolade!</h2>
        <p>Of er tegen eind 2021 ook Oempa Loempa’s en golden tickets in Lokeren te vinden zullen zijn,blijft nog een vraagteken. Wél zeker is dat Barry Callebaut, ‘s werelds grootste fabrikant van chocoladeproducten, er een nieuw Global Distribution Centre gaat bouwen samen met WDP. </p>
        <a class="info-button" href="#">
          <div class="flex">
            <p class="mr-6">Ontdek het verhaal</p>
            <img alt src="../assets/images/arrow.png" />
          </div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
