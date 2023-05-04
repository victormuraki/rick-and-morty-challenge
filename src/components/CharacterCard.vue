<template>
    <v-card>
        <v-img
            :src="cardsData.image"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            cover
        />
        <v-card-actions>
            <router-link class="black--text" :to="`/character/${cardsData.id}`">{{ handleCardNameMask }}</router-link>
            <v-spacer />
            <v-btn @click="handleFavoriteClick" icon :color="handleButtonColor">
                <v-icon>mdi-heart</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import localstorage from '@/services/localstorage/localstorage'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'CharacterCard',
    props: {
        cardsData: {
            type: Object,
            default: () => {}
        },
    },
    methods: {
        ...mapActions({
            addFavorite: 'addFavorite'
        }),
        handleFavoriteClick() {
            return this.isFavorited ? this.removeIdFromFavorite() : this.setFavoriteCharacter()
        },
        setFavoriteCharacter() {
            localstorage('favoriteCharacter').addFavorites(this.cardsData.id)
        },
        removeIdFromFavorite() {
            localstorage('favoriteCharacter').removeFavorite(this.cardsData.id)
        }
    },
    computed: {
        ...mapGetters({
            getFavorites: 'getFavorites'
        }),
        handleCardNameMask() {
            if (this.cardsData.name.length > 15) {
                return this.cardsData.name.substring(0, 15) + '...'
            }
            return this.cardsData.name
        },
        handleButtonColor() {
            return this.getFavorites.includes(this.cardsData.id) ? 'red' : 'surface-variant'
        },
        isFavorited() {
            return this.getFavorites.includes(this.cardsData.id)
        }
    },
}
</script>

<style scoped>
a {
    text-decoration: none;
}

</style>