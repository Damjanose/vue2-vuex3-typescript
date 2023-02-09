import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: localStorage.getItem('loginText'),
    registerValue: localStorage.getItem('registerText')
  },
  getters: {
    text({ text }) {
      return text || ''
    },
    registerValue({ registerValue}) {
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
      localStorage.setItem('loginText', payload)
      commit('SET_TEXT', payload)
    },
    setRegisterValue({commit}, payload) {
      localStorage.setItem('registerText', payload);
      commit('SET_REGISTER_VALUE', payload);
    },
  },
  modules: {
  },
})
