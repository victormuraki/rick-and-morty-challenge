<template>
    <v-card>
        <v-img
            :src="cardsData.src"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            cover
        />
        <v-card-actions>
            <span>{{ cardsData.title }}</span>
            <v-spacer />
            <v-btn icon color="surface-variant">
                <v-icon>mdi-heart</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'CharacterCard',
    props: {
        cardsData: {
            type: Object,
            default: () => {}
        },
    },
}
</script>