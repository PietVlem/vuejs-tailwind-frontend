<template>
  <div class="info-block">
    <div class="info-block__left">
      <div class="pl-105">
        <div>
          <h2>
            Het grootste chocolademagazijn?
            <br />Dat komt in Lokeren!
          </h2>
          <p
            class="w-2/3"
          >Het nieuwe Global Distribution Centre zal dienen als Belgische logistieke hub voor de wereldwijde distributie chocolade van Barry Callebaut. Dit gebeurde tot op heden op verschillende locaties in de regio Aalst.</p>
          <a href="#" class="default-link">Veelgestelde vragen</a>
        </div>
        <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" class="info-block__middle-div">
          <span>WDP GAAT VOOR <br> BREAAM CERTIFICAAT <br> OUTSTANDING.</span>
        </div>
        <img data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600" alt src="../assets/images/work.png" />
      </div>
    </div>
    <div class="info-block__right">
      <div class="pr-105">
        <div>
          <h2>60.000m² chocolade!</h2>
          <p
            class="mb-4"
          >Of er tegen eind 2021 ook Oempa Loempa’s en golden tickets in Lokeren te vinden zullen zijn,blijft nog een vraagteken. Wél zeker is dat Barry Callebaut, ‘s werelds grootste fabrikant van chocoladeproducten, er een nieuw Global Distribution Centre gaat bouwen samen met WDP.</p>
          <a class="info-button" href="#">
            <div class="flex">
              <p class="mr-6">Ontdek het verhaal</p>
              <div>
                <img class="p-3" alt src="../assets/images/arrow2.png" />
              </div>
            </div>
          </a>
        </div>
        <img data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="600" alt src="../assets/images/choco-girl.png" />
      </div>
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
