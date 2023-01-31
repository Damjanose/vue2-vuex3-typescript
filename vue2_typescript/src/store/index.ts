import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: localStorage.getItem('text2'),
  },
  getters: {
    text({ text }) {
      console.log(text)
      return text || ''
    },
  },
  mutations: {
    SET_TEXT(state, payload) {
      state.text = payload
    },
  },
  actions: {
    setText({ commit }, payload) {
      localStorage.setItem('text2', payload)
      commit('SET_TEXT', payload)
    },
  },
  modules: {
  },
})
