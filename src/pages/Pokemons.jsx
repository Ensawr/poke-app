import React, { useState, useEffect } from 'react';
import pokemonServices from '../services/pokemonServices';

const Pokemons = () => {

    const [pokemons, setPokemons] = useState({})
    

    const getAllPokemons = async () => {
        try {
            const result = await pokemonServices.getAllPokemons();
            if (result?.success) {
                setPokemons(result?.data);
            }
        } catch (error) {}
    };

    useEffect(() => {
        getAllPokemons()
    }, [])

    useEffect(() => {
        console.log("testo",pokemons)
    }, [pokemons])

    return (
        <div>Pokemons</div>
    )

}

export default Pokemons