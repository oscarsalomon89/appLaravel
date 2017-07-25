import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations'
 
Vue.use(Vuex)
 
// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement')
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})