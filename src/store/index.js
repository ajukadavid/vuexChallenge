import { createStore } from 'vuex'
import productsModule from './modules/products.js'
import CartModule from './modules/cart.js'

import { VuexPersistence } from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
const store = createStore({
  modules: {
    prods: productsModule,
    cart: CartModule
  },
  state(){
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context){
      context.commit('login')
    },
    logout(context){
      context.commit('logout')
    }
  },
  getters:{
    isAuthenticated(state){
      return state.isLoggedIn
    }
  },
plugins: [vuexLocal.plugin]
});

export default store