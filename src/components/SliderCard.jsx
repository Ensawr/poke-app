import React, { useState, useEffect } from 'react';
import pokemonServices from '../services/pokemonServices';

const SliderCard = ({props}) => {

    const [pokemon, setPokemon] = useState({})

    const getPokemonInfo = async () => {
        try {
            const result = await pokemonServices.getSpecificPokemon(props);
            if (result?.success) {
                setPokemon(result?.data);
            }
        } catch (error) {}
    };

    useEffect(() => {
        getPokemonInfo()
    }, [])

    useEffect(() => {
        // console.log(pokemon)
    }, [pokemon])

  return (
        <div className='grid gap-8 py-4 text-center h-56'>
            <div>
                <p className='capitalize font-bold text-[#ffcb08]'>{pokemon?.name}</p>
            </div>
            <div className='h-32'>
                <img className='mx-auto max-w-32 max-h-32' src={pokemon.sprites?.other.showdown.front_default} alt="" />
            </div>
        </div>
  )
}

export default SliderCard