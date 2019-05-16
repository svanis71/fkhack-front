<template>
  <div>
    <h5>Andel avbrutna ansökningar</h5>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { StatistikData } from "@/main";
import Chart from "chart.js";

@Component
export default class CirkelDiagram extends Vue {
  @Prop() private values!: StatistikData;

  mounted() {
    const el = this.$el.querySelector("canvas");
    const ctx = (el as HTMLCanvasElement).getContext("2d");
    const tidGruppA = this.values.A.started - this.values.A.ended;
    const tidGruppB = this.values.B.started - this.values.B.ended;
    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Grupp A", "Grupp B"],

        datasets: [
          {
            label: "Andel avbrutna ansökningar",
            data: [tidGruppA, tidGruppB],
            backgroundColor: ["#bada55", "rgb(255,0,200)"]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.3
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h5 {
  margin-bottom: 1em;
}
</style>
