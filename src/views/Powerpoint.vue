<template>
  <div>
    <div class="powerpoint">
      <h1>A/B testning</h1>
      <div class="beskrivning">
        <h2>Vad innebär det?</h2>Används för att optimera webbsidor.
        <br>Ett experiment med två olika gränssnitt som väljs ut och testas mot varandra.
      </div>
      <div>
        <h2>Problembeskrivning</h2>
        <div>
          <ul>
            <li>Kund missförstår hur de ska gå tillväga.</li>
            <li>Man vill enkelt testa olika lösningar.</li>
          </ul>
        </div>
        <h2>Vilka är intresserade av detta?</h2>
        <ul>
          <li>ID, AD, utvecklare</li>
          <li>Verksamhetsutvecklare</li>
          <li>Handläggare</li>
          <li>Många fler</li>
        </ul>
        <h2>Vad vill vi visa med detta demot?</h2>
        <ul>
          <li>Det behöver inte vara svårt eller dyrt.</li>
          <li>Exempel på statistik.</li>
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
