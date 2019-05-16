<template>
  <div class="Statistik">
    <div>
      <h2>Total</h2>
      <Tabell v-if="statistik" v-bind:values="statistik.total"></Tabell>
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
</template>

<style scoped lang="stylus">
  .Statistik
    display grid
    grid-template-columns repeat(3, 1fr)
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BAS_URL} from '../main';
import Tabell from '@/components/Tabell';

@Component({
  components: {Tabell},
})
export default class Statistik extends Vue {
   statistik: StatistikData = null;

  async created(){
     const response = await fetch(`${BAS_URL}/statistik`);
     this.statistik = await response.json();
  }
}
</script>
