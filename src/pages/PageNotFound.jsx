import React, { useState, useEffect } from 'react';
import pokemonServices from '../services/pokemonServices';

const PageNotFound = () => {

  const [pokemon, setPokemon] = useState()

  const getPokemon = async () => {
    try {
        const result = await pokemonServices.getSpecificPokemon('dragonite');
        if (result?.success) {
          setPokemon(result?.data.sprites?.other.showdown.front_default);
        }
    } catch (error) {}
  };

  useEffect(() => {
    getPokemon()
  }, [])
  
  return (
    <div className='h-screen flex items-center justify-center'>
      <div>
        <p className='font-bold text-[#ffcb08] text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>Page is not found</p>
        <img className='mx-auto pt-8 w-28' src={pokemon} alt="" />
      </div>
    </div>
  )
}

export default PageNotFound