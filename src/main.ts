import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
export const BAS_URL = 'https://fkhack-rest.herokuapp.com/';

export interface FlodesStatistik {
  started: number;
  ended: number;
  median: number;
}

export interface StatistikData {
  A: FlodesStatistik;
  B: FlodesStatistik;
  total: FlodesStatistik;
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
