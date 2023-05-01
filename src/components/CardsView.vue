<template>
    <v-card class="mx-auto">
        <v-container fluid>
            <v-row dense>
                <v-col v-for="card in cards" :key="card.id" :cols="6">
                    <CharacterCard :cards-data="card" />
                </v-col>
            </v-row>
        </v-container>
        <v-card v-intersect="infiniteScrolling"></v-card>
    </v-card>
</template>
  
<script>

import CharacterCard from '@/components/CharacterCard.vue';
import { rickAndMortyServices } from '@/services/apiServices/rick-and-morty';

export default {
    name: 'CardsView',
    components: {
        CharacterCard,
    },
    data: () => ({
        cards: [],
        page: 1
    }),
    created() {
        this.fetchDataCards();
    },
    methods: {
        async fetchDataCards() {
            const getData = await rickAndMortyServices.getCharacters(this.page);
            this.cards = getData.data;
        },
        async infiniteScrolling() {
            this.page++;
            const getData = await rickAndMortyServices.getCharacters(this.page);
            getData.data.forEach(item => this.cards.push(item))
        }
    },
}
</script>