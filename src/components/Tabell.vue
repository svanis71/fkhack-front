<template>
  <div class="hello">
    <table>
      <tr>
        <th>Antal påbörjade:</th>
        <td>{{values.started}}</td>
      </tr>
      <tr>
        <th>Antal avslutade:</th>
        <td>{{values.ended}}</td>
      </tr>
      <tr>
        <th>Mediantid:</th>
        <td>{{values.median}}s</td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="stylus">
table {
  border: 1px solid black;
  margin-bottom: 20px;
  padding 0.5em
}
</style>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { FlodesStatistik } from "@/main";

@Component
export default class Tabell extends Vue {
  @Prop() private values!: FlodesStatistik;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #0000ff;
}
</style>
