import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
import client from './modules/client'
 
Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
      cart,
      products,
      client
    }
})