<template>
      <v-content class="mt-0 mb-0" style="min-height: 31rem; background-position: bottom; background-size: cover" :style="{'background-image': `url(${require('@/assets/bg-rick-and-morty-2.jpg')})`}">
      <v-container fluid>
        <v-row>
          <v-col class="text-center">
            <h1 class="hero-headline">RICK AND MORTY</h1>
            <SearchBar/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

    export default {
        name: 'HeroHome',
        components: {
        SearchBar
    },
    }
</script>

<style scoped>
.hero-headline {
    color: #ffffff;
    font-size: 3rem;
}
</style>
