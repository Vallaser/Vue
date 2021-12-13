import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PandaForm from "../views/PandaForm";
import PandaList from "../views/PandaList";
import VueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [ //les enfants de Home
      {
        path:'/',
        name: 'PandaList',
        component: PandaList
      },
      {
        path: '/pandaForm',
        name: 'PandaForm',
        component: PandaForm
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
