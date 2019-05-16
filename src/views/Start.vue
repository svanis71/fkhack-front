<template>
  <div class="home">
    <button @click="login('1')">Person 1</button>
    <button @click="login('2')">Person 2</button>
  </div>
</template>

<script lang="ts">
let kundgrupp: string;
import { Component, Vue } from "vue-property-decorator";
import { BAS_URL } from "../main";

@Component({
  components: {},

  methods: {
    async login(pnr) {
      const response = await fetch(`${BAS_URL}/starta`, {
        headers: { token: pnr }
      });
      const data = await response.text();
      sessionStorage.setItem("stuff", data);
      this.$router.push("about");
    }
  }
})
export default class Home extends Vue {}
</script>
