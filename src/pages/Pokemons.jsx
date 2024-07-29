import React, { useState, useEffect } from 'react';
import pokemonServices from '../services/pokemonServices';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [sorted, setSorted] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [pokemonPerPage,setPokemonPerPage] = useState(20);

    const getAllPokemons = async () => {
        try {
            // API has 1302 pokemons
            const result = await pokemonServices.getAllPokemons(1302);
            if (result?.success) {
                console.log(result.data)
                setPokemons(result?.data);
            }
        } catch (error) {
            console.error('Error fetching pokemons:', error);
        }
    };

    const clearFilters = () => {
        setSorted(false)
        getAllPokemons();
    }

    const sortAlphabetical = () => {
        if(sorted){
            const sortedPokemons = [...pokemons].sort((b, a) => a.name.localeCompare(b.name));
            setPokemons(sortedPokemons);
            setSorted(!sorted)
        }
        else{
            const sortedPokemons = [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
            setPokemons(sortedPokemons);
            setSorted(!sorted)
        }
    };

    useEffect(() => {
        getAllPokemons();
    }, []);

    const lastPokemonIndex = currentPage * pokemonPerPage;
    const firstPokemonIndex = lastPokemonIndex - pokemonPerPage;
    const paginatedPokemons = pokemons.slice(firstPokemonIndex,lastPokemonIndex)

    return (
        <div>
            <div>
                <div className='flex justify-center gap-4 my-4 text-sm'>
                    <button onClick={sortAlphabetical} className='p-2 px-4 bg-yellow-300 rounded-lg'>Sort {!sorted ? "A to Z" : "Z to A"}</button>
                    <button onClick={clearFilters} className='p-2 px-4 bg-yellow-300 rounded-lg'>Clear All Filters</button>
                </div>
                <div className='grid 2xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 mx-4 gap-8'>
                    {paginatedPokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.name} props={pokemon.name} />
                    ))}
                </div>
                <Pagination totalPokemons={pokemons.length} pokemonPerPage={pokemonPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </div>
    );
};

export default Pokemons;
