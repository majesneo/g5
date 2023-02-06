import Vue from 'vue';
import Vuex from 'vuex';
import 'reflect-metadata';
import { productModule, sliderModule } from '@/Core/services/Store.service';
import { vuexLocal } from '@/Core/store/Vuex-persist';

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [vuexLocal.plugin],
  modules: {
    productModule,
    sliderModule,
  },
});
