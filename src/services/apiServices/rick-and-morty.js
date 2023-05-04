import Axios from "axios";
import store from '../../store'

export const rickAndMortyServices = {
    getCharacters: async (page) => {
        try {
            const params = {
                page: page,
                name: store.getters.getCriteria.searchName
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
    }
}