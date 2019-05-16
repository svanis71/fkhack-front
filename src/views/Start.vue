<template>
  <div class="Statistik">
      <p v-if="visaStatus">Tack för din ansökan.</p>
    <button @click="login('2')">Person 1</button>
    <button @click="login('3')">Person 2</button>
  </div>
</template>

<style scoped lang="stylus">
  button
    margin-right 1rem
</style>

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
      this.$router.push("Ansokan");
    }
  }
})
export default class Statistik extends Vue {
    visaStatus: boolean = false;

    created(){
        this.visaStatus = this.$route.query.ok === 'true';
    }
}
</script>
