<template>
  <div class="Statistik">
    <p v-if="visaStatus">Tack för din ansökan.</p>
    <div class="personer">
      <a @click="login('197109259288')">
        <img src="../assets/person1.png">
        <p>Anna, 19710925-9288</p>
      </a>
      <a @click="login('197101169295')">
        <img src="../assets/person2.png">
        <p>Bob, 19710116-9295</p>
      </a>
      <form @submit.prevent="login(pnr)">
        <img src="../assets/neutral.png">
        <div>
          Kim,
          <input v-model="pnr" pattern="[0-9-]+" placeholder="Personnummer" type="text">
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="stylus">
button {
  margin-right: 1rem;
}

form {
  margin-top: 0.75rem;
}

.personer {
  display: flex;
  align-items: flex-end;

  a {
    cursor: pointer;
  }
}
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
  pnr: string = "";

  created() {
    this.visaStatus = this.$route.query.ok === "true";
  }
}
</script>
