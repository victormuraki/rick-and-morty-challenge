<template>
    <v-card class="mx-auto">
        <v-container fluid>
            <v-row dense>
                <v-col
                    v-for="card in cards"
                    :key="card.id"
                    :cols="4"
                >
                <CharacterCard
                    :cards-data="card"
                />
                </v-col>
            </v-row>
        </v-container>
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
    }),
    created () {
        this.fetchDataCards();
    },
    methods: {
        async fetchDataCards() {
            const getData = await rickAndMortyServices.getCharacters();
            this.cards = getData.data;
        }
    },
}
</script>