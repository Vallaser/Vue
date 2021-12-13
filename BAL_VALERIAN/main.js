import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store'
import adoptable from "./utils/filter";
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.filter('adoptable', adoptable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
