<template>
    <div>
        <HeroHome />
        <CardsView />
    </div>
</template>

<script>
import HeroHome from '@/components/HeroHome.vue';
import CardsView from '@/components/CardsView.vue';

    export default {
        name: 'CatalogHome',
        components: {
                    HeroHome,
                    CardsView
                }
    }
</script>
