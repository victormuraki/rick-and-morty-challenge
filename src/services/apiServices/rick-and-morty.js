import Axios from "axios";

export const rickAndMortyServices = {
    getCharacters: async () => {
        const response = await Axios.get("https://rickandmortyapi.com/api/character/")
        return {
            data: response.data.results
        }
    }
}