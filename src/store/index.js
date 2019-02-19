import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    times: []
  },
  mutations: {
    SET_TIME: (state, times) => {
      state.times = times
    }
  }
})

export default store
