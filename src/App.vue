<template>
  <v-app>
    <v-main>
      <SubHeader />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import localstorage from '@/services/localstorage/localstorage'
import { mapActions } from 'vuex'
import router from './routes'

import SubHeader from '@/components/SubHeader.vue';

export default {
  name: "App",
  router,
  components: { SubHeader },
  created() {
    this.recoverFavoritesAtStore();
  },
  methods: {
    ...mapActions({
      setFavorites: 'setFavorites'
    }),
    recoverFavoritesAtStore() {
      const favoritesAtLocalStorage = localstorage('favoriteCharacter').getFavorites()
      this.setFavorites(favoritesAtLocalStorage.length ? favoritesAtLocalStorage : [])
    }
  },
};
</script>
