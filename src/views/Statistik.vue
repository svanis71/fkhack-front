<template>
  <div class="Statistik" v-if="statistik">
    <div class="tabeller">
      <div>
        <h2>Totalt</h2>
        <Tabell v-bind:values="statistik.total"></Tabell>
      </div>
      <div>
        <h2>Grupp A</h2>
        <Tabell v-if="statistik" v-bind:values="statistik.A"></Tabell>
      </div>
      <div>
        <h2>Grupp B</h2>
        <Tabell v-if="statistik" v-bind:values="statistik.B"></Tabell>
      </div>
    </div>
    <div class="diagram">
      <CirkelDiagram class="dia" v-bind:values="statistik"/>
      <StapelDiagram class="dia" v-bind:values="statistik"/>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.tabeller {
  display: flex;

  > div {
    margin-right: 1em;
  }
}

h2 {
  background-color: #0D462B;
  color: white;
  text-align: center;
  padding: 0.24em;
}

.diagram {
  display: grid;
  grid-template-columns: 200px 400px;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BAS_URL, StatistikData } from "@/main";
import Tabell from "@/components/Tabell.vue";
import StapelDiagram from "@/components/StapelDiagram.vue";
import CirkelDiagram from "@/components/CirkelDiagram.vue";

@Component({
  components: { Tabell, CirkelDiagram, StapelDiagram }
})
export default class Statistik extends Vue {
  private statistik: StatistikData = null;

  public async created() {
    const response = await fetch(`${BAS_URL}/statistik`);
    this.statistik = await response.json();
  }
}
</script>
