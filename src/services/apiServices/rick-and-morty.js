import Axios from "axios"
import store from '../../store'

export const rickAndMortyServices = {
    getCharacters: async () => {
        try {
            const params = {
                page: store.getters.getCurrentPage,
                name: store.getters.getSearchName
            }
            const { data: { results, info: { next } } } = await Axios.get('https://rickandmortyapi.com/api/character/', { params })
            return {
                data: results,
                next: next

            }
        } catch (err) {
            return {
                data: []
            }
        }
    },
    getSingleCharacters: async (id) => {
        try {
            const { data } = await Axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            return {
                data: data
            }
        } catch (err) {
            return {
                data: []
            }
        }
    }
}