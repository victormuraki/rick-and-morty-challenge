<template>
  <div>
    <v-app-bar app color="black" dark>
      <v-toolbar-title>
        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        Rick and Morty Catalog
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <div v-if="this.$route.params.id">
          <v-list-item clickable @click="goToHomePage">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
        </div>
        <v-list-item :disabled="Boolean(!this.getFavoritesIdToSearch.length)" clickable @click="clearFavoriteView">
          <v-list-item-title>Clear Favorites filter</v-list-item-title>
        </v-list-item>
        <v-list-item :disabled="Boolean(this.getFavoritesIdToSearch.length)" clickable @click="setFavoriteView">
          <v-list-item-title>Favorites</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SubHeader',
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    ...mapGetters({
      getFavorites: 'getFavorites',
      getFavoritesIdToSearch: 'getFavoritesIdToSearch'
    }),
  },
  methods: {
    ...mapActions({
      setFavoritesIdToSearch: 'setFavoritesIdToSearch',
      setSearchName: 'setSearchName'
    }),
    setFavoriteView() {
      const favoritesIdArrayToString = this.getFavorites.join(',')
      this.setFavoritesIdToSearch(favoritesIdArrayToString)
    },
    clearFavoriteView() {
      this.setFavoritesIdToSearch('')
      this.setSearchName('')
    },
    goToHomePage() {
      this.$router.push('/')
    }
  },
}
</script>