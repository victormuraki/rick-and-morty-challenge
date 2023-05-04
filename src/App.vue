<template>
  <v-app>
    <v-main>
      <SubHeader />
      <CatalogHome />
      <FooterBar />
    </v-main>
  </v-app>
</template>

<script>
import localstorage from '@/services/localstorage/localstorage'
import { mapActions } from 'vuex'

import SubHeader from '@/components/SubHeader.vue';
import FooterBar from '@/components/FooterBar.vue';
import CatalogHome from '@/components/CatalogHome.vue';

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { SubHeader, FooterBar, CatalogHome },
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
