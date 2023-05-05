<template>
  <v-form @submit.prevent="fetchCriteria">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="message" append-icon="mdi-magnify" clear-icon="mdi-close-circle" solo clearable
            hide-details label="Search by name" type="text" @click:append="fetchCriteria"
            @click:clear="getFavoritesIdToSearch.length ? restoreFavoritesCards() : clearMessage()"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    message: '',
  }),
  computed: {
    ...mapGetters({
      getFavorites: 'getFavorites',
      getFavoritesIdToSearch: 'getFavoritesIdToSearch'
    }),
  },
  methods: {
    ...mapActions({
      setSearchName: 'setSearchName',
      setCurrentPage: 'setCurrentPage',
      setFavoritesIdToSearch: 'setFavoritesIdToSearch'
    }),
    fetchCriteria() {
      this.setSearchName(this.message)
      this.setCurrentPage(1)
    },
    clearMessage() {
      this.message = ''
      this.setCurrentPage(1)
      this.setSearchName('')
    },
    restoreFavoritesCards() {
      const favoritesIdArrayToString = this.getFavorites.join(',')
      this.setSearchName('')
      this.setFavoritesIdToSearch('')
        .then(() => {
          this.setFavoritesIdToSearch(favoritesIdArrayToString)
        })
    }
  },
}
</script>

<style scoped>
.input-field {
  background: #ffffff;
}
</style>