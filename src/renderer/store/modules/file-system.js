const state = {
  fs: require('fs'),
  zip: require('node-zip')()
}

const actions = {
  // changeState ({ commit }, data) {
  //   // do something async
  //   commit('CHANGE_STATE', data)
  // }
  // someAsyncTask ({ commit }) {
  //   // do something async
  //   commit('INCREMENT_MAIN_COUNTER')
  // }
}

const mutations = {
  // INCREMENT_MAIN_COUNTER (state) {
  //   state.target++
  // },
  // CHANGE_STATE (state, data) {
  //   state.target = data
  // }
}

export default {
  state,
  actions,
  mutations
}
