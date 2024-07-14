import React, { useState, useEffect } from 'react';
import pokemonServices from '../services/pokemonServices';
import { typeColors } from '../data/pokemonTypeBackground.js'
import { cardColor } from '../data/cardTypeBackground.js'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const PokemonCard = ({props}) => {

    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true);

    const getPokemonInfo = async () => {
        try {
            const result = await pokemonServices.getSpecificPokemon(props);
            if (result?.success) {
                setPokemon(result?.data);
            }
        } catch (error) {}
    };

    const pickColorAccordingToType = (pokeType, location) => {
        var typeColor = ''
        if(location=="colorsOfType")
        typeColors.map((type)=>{
            if(type.type == pokeType){
                typeColor = type.color
            }
        })
        if(location=="colorOfCard")
        cardColor.map((type)=>{
            if(type.type == pokeType){
                typeColor = type.color
            }
        })
        return typeColor
    }


    useEffect(() => {
        getPokemonInfo()
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])

  return (
    <>
    
        {
            loading ? <Skeleton baseColor="#d3cce3" width={90} height={40}/> : 
        
            <div style={
                {background:pickColorAccordingToType(pokemon.types[0].type.name,"colorOfCard")}
                } 
                className='grid gap-6 w-64 mx-auto py-4 text-center h-72 shadow-md hover:shadow-xl rounded-xl'>
                <div>
                    <p className='capitalize font-bold text-lg'>{pokemon?.name}</p>
                </div>
                <div className='h-32'>
                    <img className='mx-auto max-w-32 max-h-32' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                </div>
                <div>
                    {pokemon?.types?.map((type)=>{
                        return(
                            <div style={
                                {background:pickColorAccordingToType(type?.type.name,"colorsOfType")}
                                } 
                                className={`max-w-20 mx-auto mb-2 rounded-lg`}
                            >
                                <p className='capitalize text-xs font-semibold text-white p-[2px]'>{type?.type.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        }
    </>
  )
}

export default PokemonCard