import React, { useState, useEffect } from 'react';
import pokemonServices from '../services/pokemonServices';
import PokemonCard from '../components/PokemonCard';

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([])
    

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
        <div className='grid grid-cols-4 gap-8'>
            {
                pokemons.map((pokemon)=>{
                    return(
                        <PokemonCard props={pokemon.name}/>
                    )
                })
            }
        </div>
    )

}

export default Pokemons