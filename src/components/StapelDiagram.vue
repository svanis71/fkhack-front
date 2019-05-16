<template>
  <canvas></canvas>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { FlodesStatistik } from "@/main";
import Chart from "chart.js";

@Component
export default class StapelDiagram extends Vue {
  @Prop() private values!: FlodesStatistik;

  mounted() {
    const el = this.$el;
    const ctx = this.$el.getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Grupp A", "Grupp B"],

        datasets: [
          {
            label: "mediantid",
            data: [24, 52],
            backgroundColor: ["#EFABCD"]
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
<style scoped lang="stylus"></style>
