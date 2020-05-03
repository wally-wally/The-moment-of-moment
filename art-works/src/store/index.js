import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedItem: 0
  },
  mutations: {
    saveNum(state, num) {
      state.selectedItem = num
    }
  }
})