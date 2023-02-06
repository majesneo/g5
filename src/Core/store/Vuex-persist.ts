import { VuexPersistence } from 'vuex-persist';

export const vuexLocal = new VuexPersistence({
  key: 'my-app-key',
  storage: window.localStorage,
  modules: ['productModule'],
});
