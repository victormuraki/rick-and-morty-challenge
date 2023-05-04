import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: [],
    criteria: {
      page: 0,
      searchName: '',
      location: ''
    }
  },
  getters: {
    getFavorites(state) {
      return state.favorites
    },
    getCriteria(state) {
      return state.favorites
    }
  },
  mutations: {
    setFavorites(state, payload) {
      state.favorites = payload
    },
    addFavorite(state, payload) {
      state.favorites.push(payload)
    },
    removeFavorite(state, payload) {
      state.favorites.splice(state.favorites.indexOf(payload), 1)
    }
  },
  actions: {
    setFavorites({ commit }, payload) {
      commit('setFavorites', payload)
    },
    addFavorite({ commit }, payload) {
      commit('addFavorite', payload)
    },
    removeFavorite({ commit }, payload) {
      commit('removeFavorite', payload)
    }
  }
})
