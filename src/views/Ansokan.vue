<template>
  <div class="Ansokan" :class="classes">
    <h1>Ansökan om bidrag (Grupp {{stuff.flode}})</h1>
    <div>
      <label for="text1">{{ansokanformulering}}</label>
      <input id="text1" type="text" autocomplete="off">

      <label for="pengar">Har du fått ersättning tidigare?</label>
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

    <div class="buttons">
      <router-link to="/">Avbryt</router-link>
      <button @click="avsluta">Skicka in</button>
    </div>
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

.buttons {
  display: flex;
  align-items: center;
}

.flode-A {
  .buttons {
    display: flex;
    flex-flow: row-reverse;
    justify-content: flex-end;
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

a {
  margin: 0 2rem;
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
  ansokanformulering: string = "";

  created() {
    this.stuff = JSON.parse(sessionStorage.getItem("stuff") || "{}");
    this.ansokanformulering =
      this.stuff!.flode === "A" ? "Vilket belopp ansöker du om?" : "Belopp";
  }

  public get classes() {
    return [`flode-${this.stuff!.flode}`];
  }

  async avsluta() {
    const response = await fetch(`${BAS_URL}/avsluta`, {
      headers: { token: this.stuff.ref }
    });

    this.$router.push({ name: "Kvittens" });
  }
}
</script>
