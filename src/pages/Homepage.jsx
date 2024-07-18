import React, { useState, useEffect } from 'react';
import pokemonServices from '../services/pokemonServices';
import SliderCard from '../components/SliderCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from '../images/pokemon-logo.png'
import { Link } from 'react-router-dom';
import {Zoom,Fade} from 'react-reveal';

const Homepage = () => {

    const [pokemons, setPokemons] = useState([])
    const [gridPokemon1, setGridPokemon1] = useState()
    const [gridPokemon2, setGridPokemon2] = useState()

    const getPokemonInfo = async (pokemon1,pokemon2) => {
      try {
          const result = await pokemonServices.getSpecificPokemon(pokemon1);
          if (result?.success) {
            setGridPokemon1(result?.data.sprites?.other.showdown.front_default);
          }
          const result2 = await pokemonServices.getSpecificPokemon(pokemon2);
          if (result2?.success) {
            setGridPokemon2(result2?.data.sprites?.other.showdown.front_default);
          }
      } catch (error) {}
    };

    const getAllPokemons = async () => {
        try {
            const result = await pokemonServices.getAllPokemons(200);
            if (result?.success) {
                setPokemons(result?.data.sort(() => Math.random() - 0.5));
                getPokemonInfo(result?.data[34].name,result?.data[61].name)
            }
        } catch (error) {}
    };

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 12
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

      useEffect(() => {
        getAllPokemons()
    }, [])

  return (
    <div>
      
      <div className='bg-[#79c9f9] h-40'>
        <div className='flex items-center justify-center pt-20 font-bold text-[#ffcb08] text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
          <p>Welcome to my</p>
          <img className='max-w-32' src={Logo} alt="" />
          <p>app</p>
        </div>
      </div>
      
      <div className='parallax max-w-full'/>

      <Zoom>
        <div className='grid lg:grid-cols-2 h-96 items-center'>
          <div className='text-center lg:mx-14 mx-2'>
            <p className='text-[#ffcb08] font-bold text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] pb-2'>
              Gotta Catch 'Em All!
            </p>
            <p className='text-xl'>Welcome to our comprehensive Pokémon haven, where every aspect of the Pokémon universe unfolds before you. Discover Every Pokémon Type and Image in PokeApp.</p>
          </div>
          <div>
            <img className='w-24 mx-auto' src={gridPokemon1} alt="" />
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className='grid bg-[#ffcb08] lg:grid-cols-2 h-96 items-center'>
          <div className='text-center lg:order-last text-white lg:mx-14 mx-2'>
            <p className='font-bold text-[#79c9f9] text-3xl drop-shadow-[0_2.2px_1.2px_rgba(256,256,256,1)] pb-2'>
              Dive into Pokémon Types: A Comprehensive Guide.
            </p>
            <p className='text-xl'> Whether you're a seasoned trainer aiming to refine your team composition or a newcomer eager to learn about the diverse Pokémon universe, our site provides the tools and resources you need to succeed.</p>
          </div>
          <div>
            <img className='w-24 mx-auto' src={gridPokemon2} alt="" />
          </div>
        </div>
      </Zoom>

      <Fade>
        <div className='grid lg:grid-cols-3 items-center'>
          <div className='lg:col-span-2'>
              <Carousel autoPlay={true} autoPlaySpeed={2000} infinite={true} arrows={false} swipeable={true} responsive={responsive}>
              {
                  pokemons.map((pokemon)=>{
                      return(
                          <div>
                          <SliderCard props={pokemon.name}/>
                          </div>
                      )
                  })
              }
              </Carousel>
          </div>
          
          <div className='text-center'>
            <Link to={'/pokemons'}>
              <button className='bg-[#ffcb08] p-2 px-3 rounded-xl text-white font-bold hover:bg-[#79c9f9]'>
                <p className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>Explore the All Pokemons</p>
              </button>
            </Link>
          </div>
        </div>
      </Fade>

      
    </div>
  )
}

export default Homepage