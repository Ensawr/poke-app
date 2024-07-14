import React, { useState, useEffect } from 'react';
import pokemonServices from '../services/pokemonServices';
import SliderCard from '../components/SliderCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Homepage = () => {

    const [pokemons, setPokemons] = useState([])

    const getAllPokemons = async () => {
        try {
            const result = await pokemonServices.getAllPokemons(200);
            if (result?.success) {
                setPokemons(result?.data.sort(() => Math.random() - 0.5));
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
        <Carousel responsive={responsive}>
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
  )
}

export default Homepage