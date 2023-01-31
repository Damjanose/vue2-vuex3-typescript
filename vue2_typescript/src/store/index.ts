import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: localStorage.getItem('text2'),
    registerValue: localStorage.getItem('register')
  },
  getters: {
    text({ text }) {
      return text || ''
    },
    registerValue({ registerValue}) {
      console.log(registerValue)
      return registerValue || ''
    },
  },
  mutations: {
    SET_TEXT(state, payload) {
      state.text = payload
    },
    SET_REGISTER_VALUE(state, payload) {
      state.registerValue = payload
    },
  },
  actions: {
    setText({ commit }, payload) {
      localStorage.setItem('text2', payload)
      commit('SET_TEXT', payload)
    },
    setRegisterValue({commit}, payload) {
      localStorage.setItem('register', payload);
      commit('SET_REGISTER_VALUE', payload);
    },
  },
  modules: {
  },
})
