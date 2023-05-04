<template>
    <v-card class="mx-auto">
        <v-container fluid >
            <v-row dense>
                <v-col class="mx-auto" v-for="card in cards" :key="card.id" cols="5" md="4" lg="2">
                    <CharacterCard :cards-data="card" class="my-3"/>
                </v-col>
            </v-row>
        </v-container>
        <v-card v-intersect="infiniteScrolling"></v-card>
    </v-card>
</template>

<script>
import { rickAndMortyServices } from '@/services/apiServices/rick-and-morty';
import { mapActions, mapGetters } from 'vuex'
import CharacterCard from '@/components/CharacterCard.vue';

export default {
    name: 'CardsView',
    components: {
        CharacterCard
    },
    data: () => ({
        cards: []
    }),
    created() {
        this.fetchDataCards();
    },
    watch: {
        getSearchName() {
            this.fetchDataCards()
        }
    },
    computed: {
        ...mapGetters({
            getCurrentPage: 'getCurrentPage',
            getSearchName: 'getSearchName'
        }),
    },
    methods: {
        ...mapActions({
            setCurrentPage: 'setCurrentPage'
        }),
        async fetchDataCards() {
            const getData = await rickAndMortyServices.getCharacters()
            this.cards = getData.data
        },
        async infiniteScrolling() {
            this.setCurrentPage(this.getCurrentPage + 1)
            const getData = await rickAndMortyServices.getCharacters()
            getData.data.forEach(item => this.cards.push(item))
        }
    },
}
</script>