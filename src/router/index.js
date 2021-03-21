import Vue from 'vue';
import VueRouter from 'vue-router';
import ApplicationForm from '@/views/ApplicationForm.vue';
import TakeAssessment from '../views/user/TakeAssessment.vue';
import SuccessPage from '../views/user/SuccessPage.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/application',
    name: 'ApplicationForm',
    component: ApplicationForm,
  },
  {
    path: '/user/assessment',
    name: 'TakeAssessment',
    component: TakeAssessment,
  },
  {
    path: '/user/success',
    name: 'SuccessPage',
    component: SuccessPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
