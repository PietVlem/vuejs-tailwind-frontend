<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="container footer__content">
        <div class="footer__newsletter">
          <Span class="footer__newsletter-title">Op de hoogte blijven van het project?</Span>
          <p class="footer__newsletter-info">Ontvang de nieuwsbrief met milestones en ander nieuws.</p>
          <div class="footer__newsletter-inputfield-wrapper">
            <input class="placeholder-white" type="text" placeholder="Mijn e-mailadres" />
            <button>stap 1/3 -></button>
          </div>
        </div>
        <div class="footer__img">
          <img class="mx-auto" alt src="../assets/images/footer-logo-big.png" />
        </div>
        <div class="footer__nav">
          <div class="footer__nav-content">
            <div class="">
              <ul class="footer-menu">
                <li>Het chocolademagazijn</li>
                <li>Duurzaamheid</li>
                <li>FAQ</li>
                <li>Partners</li>
              </ul>
            </div>
            <div class="">
              <ul class="footer-menu">
                <li>Wim interviewt</li>
                <li>Nieuws</li>
                <li>Pers</li>
              </ul>
            </div>
            <div class="">
              <ul class="footer-menu">
                <li>Jobs</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex">
      <div class="flex-1 bottom-footer-links">
        <a href="#">©2020 WDP</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
      </div>
      <div class="flex-1">
        <div class="flex author">
          <div class="flex"><p>made by The Craft</p></div>
          <div class="flex"><img class="mx-auto" alt src="../assets/images/Oval.png" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
