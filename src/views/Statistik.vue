<template>
  <div class="Statistik" v-if="statistik">
    <div style="grid-area: a">
      <h2>Total</h2>
      <Tabell v-bind:values="statistik.total"></Tabell>
    </div>
    <div style="grid-area: b">
      <h2>Grupp A</h2>
      <Tabell v-if="statistik" v-bind:values="statistik.A"></Tabell>
    </div>
    <div style="grid-area: c">
      <h2>Grupp B</h2>
      <Tabell v-if="statistik" v-bind:values="statistik.B"></Tabell>
    </div>
    <StapelDiagram class="dia" style="grid-area: d" v-bind:values="statistik"/>
  </div>
</template>

<style scoped lang="stylus">
.Statistik {
  display: grid;
  grid-template-areas: 'a b c' '. d d';
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BAS_URL, StatistikData } from "@/main";
import Tabell from "@/components/Tabell.vue";
import StapelDiagram from "@/components/StapelDiagram.vue";

@Component({
  components: { Tabell, StapelDiagram }
})
export default class Statistik extends Vue {
  statistik: StatistikData = null;

  async created() {
    const response = await fetch(`${BAS_URL}/statistik`);
    this.statistik = await response.json();
  }
}
</script>
