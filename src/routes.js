import Vue from 'vue'
import Router from 'vue-router'
import CatalogHome from '@/views/CatalogHome.vue'
import CharacterDetails from '@/views/CharacterDetails.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'CatalogHome',
            component: CatalogHome
        },
        {
            path: '/character/:id',
            name: 'CharacterDetails',
            component: CharacterDetails
        }
    ]
})