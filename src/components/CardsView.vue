<template>
    <v-card class="mx-auto">
        <v-container fluid>
            <v-row dense>
                <v-col class="mx-auto" v-for="card in cards" :key="card.id" cols="5" md="4" lg="2">
                    <CharacterCard :cards-data="card" class="my-3" />
                </v-col>
            </v-row>
        </v-container>
        <v-card v-intersect="infiniteScrolling"></v-card>
    </v-card>
</template>

<script>
import { rickAndMortyServices } from '@/services/apiServices/rick-and-morty'
import { mapActions, mapGetters } from 'vuex'
import CharacterCard from '@/components/CharacterCard.vue'

export default {
    name: 'CardsView',
    components: {
        CharacterCard
    },
    data: () => ({
        cards: []
    }),
    computed: {
        ...mapGetters({
            getCurrentPage: 'getCurrentPage',
            getSearchName: 'getSearchName',
            getFavoritesIdToSearch: 'getFavoritesIdToSearch'
        }),
        isFavoriteView() {
            return this.getFavoritesIdToSearch.length
        }
    },
    watch: {
        getSearchName() {
            return this.isFavoriteView ? this.updateFavoritesDataCards() : this.fetchDataCards()
        },
        getFavoritesIdToSearch() {
            return this.isFavoriteView ? this.fetchDataCardsToFavorites() : this.fetchDataCards()
        }
    },
    methods: {
        ...mapActions({
            setCurrentPage: 'setCurrentPage'
        }),
        async fetchDataCards() {
            this.setCurrentPage(1)
            const getData = await rickAndMortyServices.getCharacters()
            this.cards = getData.data
        },
        async fetchDataCardsToFavorites() {
            this.setCurrentPage(1)
            const getData = await rickAndMortyServices.getSingleCharacters(this.getFavoritesIdToSearch)
            this.cards = getData.data
        },
        async infiniteScrolling() {
            if (this.isFavoriteView) return
            this.setCurrentPage(this.getCurrentPage + 1)
            const getData = await rickAndMortyServices.getCharacters()
            getData.data.forEach(item => this.cards.push(item))
        },
        updateFavoritesDataCards() {
            const filteredFavorites = this.cards.filter((item) => {
                const formatNameToCompare = item.name.toLowerCase().split(' ')
                return formatNameToCompare.includes(this.getSearchName.toLowerCase())
            })
            this.cards = filteredFavorites
        }
    },
}
</script>