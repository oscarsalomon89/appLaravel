import clients from '../../api/clients'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  addStatus: null
}

// getters
const getters = {
  allClients: state => state.all,
  addStatus: state => state.addStatus
}

// actions
const actions = {
  getAllClients ({ commit }) {
    clients.getClients(clients => {
      commit(types.RECEIVE_CLIENTS, { clients })
    })
  },

  addClient ({ commit, state }, data) {
    clients.addClient(
      data,
      () => commit(types.ADD_SUCCESS),
      () => commit(types.ADD_FAILURE)
    )
  }
}

// mutations
const mutations = {
  [types.RECEIVE_CLIENTS] (state, { clients }) {
    state.all = clients
  },

  [types.ADD_SUCCESS] (state) {
    state.addStatus = 'successful'
  },

  [types.ADD_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.addStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}