import React, { useState, useEffect } from 'react';
import pokemonServices from '../services/pokemonServices';

const types = [
    {
        type:'normal',
        color:'#eeeee4'
    },
    {
        type:'fighting',
        color:'#e28743'
    },
    {
        type:'flying',
        color:'#BDD4D4'
    },
    {
        type:'poison',
        color:'#B788E0'
    },
    {
        type:'ground',
        color:'#6b4c3a'
    },
    {
        type:'rock',
        color:'#634f43'
    },
    {
        type:'bug',
        color:'#96ba61'
    },
    {
        type:'ghost',
        color:'#4e2f5e'
    },
    {
        type:'steel',
        color:'#acaaad'
    },
    {
        type:'fire',
        color:'#c94230'
    },
    {
        type:'water',
        color:'#2b4bd9'
    },
    {
        type:'grass',
        color:'#308534'
    },
    {
        type:'electric',
        color:'#e3ce2b'
    },
    {
        type:'psychic',
        color:'#d97187'
    },
    {
        type:'ice',
        color:'#4bc4d6'
    },
    {
        type:'dragon',
        color:'#9d24b5'
    },
    {
        type:'dark',
        color:'#43114d'
    },
    {
        type:'fairy',
        color:'#d11bbc'
    },
]

const PokemonCard = ({props}) => {

    const [pokemon, setPokemon] = useState({})

    const getPokemonInfo = async () => {
        try {
            const result = await pokemonServices.getSpecificPokemon(props);
            if (result?.success) {
                setPokemon(result?.data);
            }
        } catch (error) {}
    };

    const pickColorAccordingToType = (color) => {
        var typeColor = ''
        types.map((type)=>{
            if(type.type == color){
                console.log(`renk budur bg-['${type.color}']`)
                typeColor = type.color
            }
        })
        return typeColor
    }


    useEffect(() => {
        getPokemonInfo()
    }, [])

    useEffect(() => {
        console.log(pokemon)
    }, [pokemon])

  return (
    
        <div className='grid gap-8 py-4 text-center h-72 shadow-md hover:shadow-2xl rounded-xl'>
            <div>
                <p className='capitalize font-bold'>{pokemon?.name}</p>
            </div>
            <div className='h-32'>
                <img className='mx-auto max-w-32 max-h-32' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            </div>
            <div>
                {pokemon?.types?.map((type)=>{
                    return(
                        <div style={
                            {background:pickColorAccordingToType(type?.type.name)}
                            } 
                            className={`max-w-20 mx-auto mb-2 rounded-lg`}
                        >
                            <p className='capitalize text-xs font-semibold text-white p-[2px]'>{type?.type.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
  )
}

export default PokemonCard