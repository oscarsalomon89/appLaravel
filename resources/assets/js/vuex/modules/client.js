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

  addClient ({ commit }, data) {
    clients.addClient(
      data,
      client => { commit(types.ADD_SUCCESS, { client })},
      () => commit(types.ADD_FAILURE)
    )
  },

  updateClient ({ commit }, data) {
    clients.updateClient(
      data,
      () => commit(types.UPDATE_SUCCESS),
      () => commit(types.UPDATE_FAILURE)
    )
  },

  deleteClient ({ commit }, data) {
    clients.deleteClient(data)
  }
}

// mutations
const mutations = {
  [types.RECEIVE_CLIENTS] (state, { clients }) {
    state.all = clients
  },

  [types.ADD_SUCCESS] (state, { client }) {
    state.all.push(client)
    state.addStatus = 'successful'
  },

  [types.UPDATE_SUCCESS] (state) {
    state.addStatus = 'successful'
  },

  [types.DELETE_SUCCESS] (state, { client }) {
    //state.all.push(client)
    state.addStatus = 'successful'
  },

  [types.ADD_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.addStatus = 'failed'
  },

  [types.UPDATE_FAILURE] (state) {
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