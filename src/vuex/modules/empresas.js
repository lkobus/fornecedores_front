import * as types from '../mutation-types'

const state = {
  main: []
}

const mutations = {
  [types.FETCH_EMPRESAS] (state, empresas) {
    state.main = empresas
  }
}

export default {
  state,
  mutations
}
