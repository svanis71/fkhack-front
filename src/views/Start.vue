<template>
  <div>
    <div class="powerpoint">
        <h1>A/B testning</h1>
        <h2>Problembeskrivning</h2>
        <div>
          <ul>
            <li>Incidenter för att kund missförstår hur de ska gå tillväga exempelvis kontoändringar.</li>
            <li>Man vill enkelt testa olika lösningar.</li>
          </ul>
        </div>
        <h2>Vem är intresserad av detta</h2>
        <ul>
          <li>ID, AD, utvecklare</li>
          <li>Verksamhetsutvecklare</li>
          <li>Handläggare</li>
          <li>Många fler</li>
        </ul>
        <h2>Vad vill vi visa med detta demot</h2>
        <ul>
          <li>Det behöver inte vara svårt eller dyrt.</li>
        </ul>
      </div>
    <p class="kvittens" v-if="visaStatus">Tack för din ansökan.</p>
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

.powerpoint {
  border solid 2px black
  width 50%
  border-radius 3px
  margin-bottom 2em
  padding 1em
}
ul {
  margin-bottom 1em
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

.kvitten {
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
  pnr: string = "";

  get visaStatus(): boolean {
    return this.$route.query.hasOwnProperty("ok");
  }
}
</script>
