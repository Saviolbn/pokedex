import React, { useState } from 'react'
import { Listing } from '../components/Listing'
import { PokemonData } from '../constants/PokemonData'

export const Home = () => {
  const{ pokemonList,setPokemonList} = PokemonData();

  const handleScrollEnd = () => {
  
    setPokemonList([...pokemonList, ...[{
      name: "Bulbasaur",
      image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
      types: [
        "grass", "poison"
      ]
    }]])
    console.log(pokemonList);
  }
  return (
      <Listing pokemonList ={pokemonList} handleScrollEnd={handleScrollEnd} />
  )
}
