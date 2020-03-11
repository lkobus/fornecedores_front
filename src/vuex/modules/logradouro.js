import * as types from '../mutation-types'

const state = {
  ufs: []
}

const mutations = {
  [types.FETCH_UF] (state, ufs) {
    state.ufs = ufs
  }
}

export default {
  state,
  mutations
}
