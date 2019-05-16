<template>
  <div class="Ansokan">
    <h1>This is an Ansokan page</h1>
    <p v-if="stuff.flode === 'A'">Långkalsonger</p>
    <p v-if="stuff.flode === 'B'">Saltgurka</p>

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
    if (response.ok) {
      alert("Bra jobbat!");
    }
  }
}
</script>
