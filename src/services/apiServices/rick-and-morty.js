import Axios from "axios";

export const rickAndMortyServices = {
    getCharacters: async (page) => {
        try {
            const response = await Axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
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