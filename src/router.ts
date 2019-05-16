import Vue from 'vue';
import Router from 'vue-router';
import Start from './views/Start.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/Ansokan',
      name: 'Ansokan',
      // route level code-splitting
      // this generates a separate chunk (Ansokan.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Ansokan" */ './views/Ansokan.vue'),
    },
    {
      path: '/Statistik',
      name: 'Statistik',
      // route level code-splitting
      // this generates a separate chunk (Ansokan.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Statistik" */ './views/Statistik.vue'),
    },
  ],
});
