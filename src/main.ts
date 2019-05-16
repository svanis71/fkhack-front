import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
export const BAS_URL = 'http://localhost:8000';

export interface FlodesStatistik{
  started: Number;
  ended: Number;
  median: Number;
  }

export interface StatistikData{
  A: FlodesStatistik;
  B: FlodesStatistik;
  total: FlodesStatistik;
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
