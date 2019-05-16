import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
export const BAS_URL = 'http://localhost:8000';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
