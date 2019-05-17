<template>
  <div class="kvittens-panel">
    <h1 class="fk-kvittens-rubrik" tabindex="-1">
      <span>Tack! Vi har tagit emot din ansökan.</span>
      <span class="ikon ikon-bock-med-ring"></span>
    </h1>
    <h2>Datum</h2>
    <p>
      <span>{{new Date().toLocaleDateString()}}</span>
    </p>
    <h2>Vad händer nu?</h2>
    <p>Din ansökan handläggs och du kommer bli kontaktad.</p>
  </div>
</template>

<style scoped lang="stylus">
p {
  line-height: 1.5;
  margin-bottom: 1.25rem;
  text-rendering: optimizeLegibility;
}

.kvittens-panel {
  background: #e6fae6;
  border: 2px solid #4da662;
  border-radius: 2px;
  font-size: 16px;
  margin-bottom: 1.7rem;
  padding: 1.5rem 1.25rem 2rem 1.5rem;
}

.fk-kvittens-rubrik {
  position: relative;
  padding-right: 55px;
  line-height: 1.25;
  margin-bottom: 1rem;

  .ikon {
    bottom: auto;
    left: auto;
    position: absolute;
    right: 0;
    top: 2px;
    font-size: 40px;

    &:before {
      vertical-align: top;
      background: transparent url('../assets/bocken.svg') no-repeat;
      background-size: cover;
      content: ' ';
      display: inline-block;
      font-style: normal;
      font-weight: 400;
      height: 1em;
      line-height: 1;
      width: 1em;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Kvittens extends Vue {}
</script>
