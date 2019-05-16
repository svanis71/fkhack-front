<template>
  <div class="Ansokan">
    <h1>Ansökan om bidrag</h1>
    <div>
      <label for="text1">Hur mycket pengar vill du ha?</label>
      <input id="text1" type="text">
      <p>Har du redan mycket pengar?</p>
      <div v-if="stuff.flode === 'A'">
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
        <select>
          <option value="ja">Ja</option>
          <option value="nej">Nej</option>
        </select>
      </div>
    </div>
    <button @click="avsluta">Skicka in</button>
  </div>
</template>

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

    this.$router.push({ name: "start", query: { ok: response.ok } });
  }
}
</script>
