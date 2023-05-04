<template>
    <div>
        <HeroHome />
        <CardsView />
    </div>
</template>

<script>
import HeroHome from '@/components/HeroHome.vue';
import CardsView from '@/components/CardsView.vue';
import { mapActions } from 'vuex';

export default {
    name: 'CatalogHome',
    components: {
        HeroHome,
        CardsView
    },
    mounted () {
        this.setCurrentPage(0)
        this.setSearchName('')
    },
    methods: {
        ...mapActions({
            setSearchName: 'setSearchName',
            setCurrentPage: 'setCurrentPage'
        })
    },
}
</script>
