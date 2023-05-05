import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: [],
    criteria: {
      page: 1,
      searchName: '',
      location: '',
      favoritesIdToSearch: ''
    }
  },
  getters: {
    getFavorites(state) {
      return state.favorites
    },
    getCriteria(state) {
      return state.criteria
    },
    getSearchName(state) {
      return state.criteria.searchName
    },
    getCurrentPage(state) {
      return state.criteria.page
    },
    getFavoritesIdToSearch(state) {
      return state.criteria.favoritesIdToSearch
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
    },
    setSearchName(state, payload) {
      state.criteria.searchName = payload
    },
    setCurrentPage(state, payload) {
      state.criteria.page = payload
    },
    setFavoritesIdToSearch(state, payload) {
      state.criteria.favoritesIdToSearch = payload
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
    },
    setSearchName({ commit }, payload) {
      commit('setSearchName', payload)
    },
    setCurrentPage({ commit }, payload) {
      commit('setCurrentPage', payload)
    },
    setFavoritesIdToSearch({ commit }, payload) {
      commit('setFavoritesIdToSearch', payload)
    }
  }
})
