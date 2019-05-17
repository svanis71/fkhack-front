<template>
  <div>
    <div class="powerpoint">
      <h1>A/B testning</h1>
      <div class="beskrivning">
        <h2>Vad innebär det?</h2>
        <ul>
          <li>Används för att optimera webbsidor.</li>
          <li>Ett experiment med två olika gränssnitt som väljs ut och testas mot varandra.</li>
        </ul>
      </div>
      <div>
        <h2>Syfte</h2>
        <div>
          <ul>
            <li>Man vill enkelt testa olika lösningar i produktion.</li>
          </ul>
        </div>
        <h2>Vilka kan dra nytta av detta?</h2>
        <ul>
          <li>Kunder</li>
          <li>Handläggare</li>
          <li>Verksamhetsutvecklare</li>
          <li>ID, AD, utvecklare</li>
          <li>Många fler</li>
        </ul>
        <h2>Vad vill vi visa?</h2>
        <ul>
          <li>Det behöver inte vara svårt eller dyrt.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.beskrivning {
  margin-bottom: 1em;
}

.powerpoint {
  border: solid 2px black;
  border-radius: 3px;
  margin-bottom: 2em;
  padding: 1em;

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
}

ul {
  margin-bottom: 1em;
}
</style>

<script lang="ts">
let kundgrupp: string;
import { Component, Vue } from "vue-property-decorator";
import { BAS_URL } from "../main";

@Component({})
export default class Powerpoint extends Vue {}
</script>
