import Vue from 'vue';
import Vuex from 'vuex';
import 'reflect-metadata';

import { Types } from '@/infrastructure/Types';
import { container } from '@/infrastructure/Inversify.config';
import { SliderService } from '@/services/Slider.service';
import { ProductService } from '@/services/Product.service';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    SliderService: container.get<SliderService>(Types.SliderService).createStore(),
    ProductService: container.get<ProductService>(Types.ProductService).createStore(),
  },
});
console.log(store, 'store');
