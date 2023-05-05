<template>
    <v-container>
        <v-row class="pb-5">
            <v-col class="d-flex" cols="12" md="4">
                <v-img :src="characterData.image"></v-img>
            </v-col>
            <v-col class="d-flex flex-column" cols="12" md="8">
                <v-card-title> {{ characterData.name }}</v-card-title>
                <v-card-text class="pb-0">
                    <v-icon v-if="isDeadCharacter" class="red--text lighten-2" size="10">
                        mdi-circle
                    </v-icon>
                    <v-icon v-else class="green--text lighten-2" size="10">
                        mdi-circle
                    </v-icon>
                    <span :class="{ 'red--text': characterData.status === 'Dead' }">
                        {{ characterData.status }}
                    </span>
                </v-card-text>
                <v-card-text class="pb-0"> Species: {{ characterData.species }}</v-card-text>
                <v-card-text class="pb-0"> Gender: {{ characterData.gender }}</v-card-text>
                <v-card-text class="pb-0"> Created: {{ getFormatDateToString() }}</v-card-text>
                <v-card-text class="pb-0"> Origin: {{ characterData.origin.name }}</v-card-text>
                <v-card-text class="pb-0"> Episodes: {{ characterData.episode.length }}</v-card-text>
            </v-col>
        </v-row>
        <v-divider class="pb-5"></v-divider>
        <h2 class="pb-4">Similar Characters</h2>
        <CardsView class="pt-2" />
    </v-container>
</template>

<script>
import { rickAndMortyServices } from '@/services/apiServices/rick-and-morty'
import { mapActions, mapGetters } from 'vuex'
import CardsView from '@/components/CardsView'

export default {
    name: 'CharacterDetails',
    components: { CardsView },
    data() {
        return {
            characterData: {},
            currentDate: '',
        }
    },
    mounted() {
        this.fetchSingleCharacterData()
    },
    computed: {
        ...mapGetters({
            getSearchName: 'getSearchName'
        }),
        isDeadCharacter() {
            return this.characterData.status === 'Dead'
        }
    },
    methods: {
        ...mapActions({
            setSearchName: 'setSearchName',
            setCurrentPage: 'setCurrentPage'
        }),
        async fetchSingleCharacterData() {
            const postId = this.$route.params.id
            const getData = await rickAndMortyServices.getSingleCharacters(postId)
            this.characterData = getData.data
            this.setSearchToSimilarCharacters()
        },
        setSearchToSimilarCharacters() {
            const firstNameCharacter = this.characterData.name.split(' ')[0]
            this.setSearchName(firstNameCharacter)
            this.setCurrentPage(0)
        },
        getFormatDateToString() {
            const date = new Date(this.characterData.created)
            const formattedDate = date.toLocaleDateString('pt-BR')
            return formattedDate
        }

    }
}
</script>