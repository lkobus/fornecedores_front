import * as types from '../mutation-types'

const state = {
  main: []
}

const mutations = {
  [types.FETCH_FORNECEDORES] (state, fornecedores) {
    state.main = fornecedores
  }
}

export default {
  state,
  mutations
}
