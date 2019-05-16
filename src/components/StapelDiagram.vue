<template>
  <div>
    <h5>Flödestid i sekunder (median)</h5>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { StatistikData } from "@/main";
import Chart from "chart.js";

@Component
export default class StapelDiagram extends Vue {
  @Prop() private values!: StatistikData;

  mounted() {
    const el = this.$el.querySelector("canvas");
    const ctx = (el as HTMLCanvasElement).getContext("2d");
    const tidGruppA = this.values.A.median;
    const tidGruppB = this.values.B.median;
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Grupp A", "Grupp B"],

        datasets: [
          {
            label: "",
            data: [tidGruppA, tidGruppB],
            backgroundColor: ["#bada55", "rgb(255,0,200)"]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.3
      }
    });
    console.log(el);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h5 {
  margin-bottom: 1em;
}
</style>
