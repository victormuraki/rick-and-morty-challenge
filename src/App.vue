<template>
  <v-app>
    <v-main>
      <SubHeader />
      <CardsView />
      <FooterBar />
    </v-main>
  </v-app>
</template>

<script>
import SubHeader from '@/components/SubHeader.vue';
import FooterBar from '@/components/FooterBar.vue';
import CardsView from '@/components/CardsView.vue';


export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { SubHeader, FooterBar, CardsView }
};
</script>
