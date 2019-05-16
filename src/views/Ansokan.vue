<template>
  <div class="Ansokan">
    <h1>Ansökan om bidrag</h1>
    <div>
      <label for="text1">Hur mycket pengar vill du ha?</label>
      <input id="text1" type="text">

      <label for="pengar">Har du redan mycket pengar?</label>
      <div class="radioknappar" v-if="stuff.flode === 'A'">
        <label>
          <input type="radio" value="ja" name="pengar">
          Ja
        </label>
        <label>
          <input type="radio" value="nej" name="pengar">
          Nej
        </label>
      </div>

      <div v-if="stuff.flode === 'B'">
        <select id="pengar">
          <option value="ja">Ja</option>
          <option value="nej">Nej</option>
        </select>
      </div>
    </div>
    <button @click="avsluta">Skicka in</button>
  </div>
</template>

<style scoped lang="stylus">
input[type='text'] {
  appearance: none;
  background-color: #eff6fa;
  border-style: solid;
  border-color: #ccc;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.75);
  display: block;
  font-family: inherit;
  font-size: 0.875rem;
  height: 2.3125rem;
  margin: 0 0 1.5em 0;
  padding: 0.5rem;
  width: 100%;
  transition: border-color 0.15s linear, background 0.15s linear;
  border-radius: 4px;
  border-width: 2px;
  background-color: #eff6fa;
  width: 300px;

  &:focus {
    background-color: #eff6fa;
    outline: 3px solid #fc0;
  }
}

.radioknappar {
  margin-bottom: 1.5em;
}

label {
  color: #1b1e23;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BAS_URL } from "../main";
interface Blaha {
  flode: string;
  ref: string;
}
@Component({})
export default class Statistik extends Vue {
  stuff: Blaha = null;

  created() {
    this.stuff = JSON.parse(sessionStorage.getItem("stuff") || "{}");
  }

  async avsluta() {
    const response = await fetch(`${BAS_URL}/avsluta`, {
      headers: { token: this.stuff.ref }
    });

    this.$router.push({ name: "Kvittens" });
  }
}
</script>
