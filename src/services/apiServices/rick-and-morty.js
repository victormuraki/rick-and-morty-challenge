import Axios from "axios";
import store from '../../store'

export const rickAndMortyServices = {
    getCharacters: async () => {
        try {
            const params = {
                page: store.getters.getCurrentPage,
                name: store.getters.getSearchName
            }
            const response = await Axios.get('https://rickandmortyapi.com/api/character/', { params })
            return {
                data: response.data.results
            }    
        } catch(err) {
            return {
                data: []
            }
        }
    },
    getSingleCharacters: async (id) => {
        try {
            const response = await Axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            return {
                data: response.data
            }
        } catch(err) {
            return {
                data: []
            }
        }
    }
}