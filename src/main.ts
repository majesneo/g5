import Vue from 'vue';

import '../node_modules/swiper/swiper-bundle.css';
import './reset.css';
import { store } from '@/store';
import VueCookies from 'vue-cookies';

import App from './App.vue';

Vue.use(VueCookies);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
