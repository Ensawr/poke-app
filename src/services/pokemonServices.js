import { unauthorized } from '../config/axios'

const pokemonServices = {

    getAllPokemons: async (limit) => {
        try {
            const response = await unauthorized.get(`/pokemon?limit=${limit}`)

            if (response.status != 200 && response.status != 201) throw new Error("Something went wrong!")

            return { success: true, data: response?.data.results }
        } catch (error) {
            return { success: false, error };
        }
    },

    getSpecificPokemon: async (data) => {
        try {
            const response = await unauthorized.get(`/pokemon/${data}`)

            if (response.status != 200 && response.status != 201) throw new Error("Something went wrong!")

            return { success: true, data: response?.data }
        } catch (error) {
            return { success: false, error };
        }
    },
}

export default pokemonServices