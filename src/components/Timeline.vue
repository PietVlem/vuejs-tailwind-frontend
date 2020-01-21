<template>
  <div class="timeline-block">
    <div class="timeline-block__content container px-16">
      <div class="timeline-block__heading">
        <div class="flex-1">
          <h3>Verloop van de werken</h3>
        </div>
        <div class="flex-1">
          <a class="info-button float-right" href="#">
            <div class="flex">
              <p class="mr-6">Bekijk alle milestones</p>
              <div>
                <img class="p-3" alt src="../assets/images/arrow2.png" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="timeline-block__tl-wrapper">
        <div class="timeline-block__tl-head">
          <div>
            <p>
              <b>Start werken</b>
            </p>
            <span>2019</span>
          </div>
          <div></div>
          <div>
            <p>
              <b>Huidige Statis</b>
              <br />|
              <br />|
              <br />|
              <br />
            </p>
            <span></span>
          </div>
          <div></div>
          <div></div>
          <div>
            <p>
              <b>Voorzien einde</b>
            </p>
            <span>Mid 2021</span>
          </div>
        </div>
        <div class="timeline-block__tl-graphic">
          <div class="timeline-block__tl-graphic-done">
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span class="active"></span>
            </div>
          </div>
          <div class="timeline-block__tl-graphic-tobe-done">
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <img src="../assets/images/flag.png" alt="Flag" />
            </div>
          </div>
        </div>
        <div class="timeline-block__tl-info">
          <div>
            <p>
              <b>Fase 1</b>
            </p>
            <p>Grondwerken</p>
            <a href="#">
              <img class src="../assets/images/arrow2.png" alt="arrow" />
            </a>
          </div>
          <div>
            <p>
              <b>Fase 2</b>
            </p>
            <p>Ruwbouw</p>
            <a href="#">
              <img class src="../assets/images/arrow2.png" alt="arrow" />
            </a>
          </div>
          <div>
            <p>
              <b>Fase 3</b>
            </p>
            <p>Intern + Extern gebouw</p>
            <img src="../assets/images/timeline-img.png" alt="Flag" />
            <p>
              <b>Installatie ventilatie</b>
            </p>
            <p>Het thermisch comfort werd bekeken in een ventilatiestudie van Sureal, dat ook een daglichtstudie ondernam.</p>
            <a href="#">
              <img class src="../assets/images/arrow2.png" alt="arrow" />
            </a>
          </div>
          <div>
            <p>
              <b>Fase 4</b>
            </p>
            <p>Intern + extern afwerking</p>
          </div>
          <div>
            <p>
              <b>Fase 5</b>
            </p>
            <p>Afwerking parking</p>
          </div>
          <div>
            <p>
              <b>Fase 6</b>
            </p>
            <p>Opening!</p>
          </div>
        </div>
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
