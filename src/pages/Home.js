import React from 'react'
import { Listing } from '../components/Listing'

export const Home = () => {
  const pokemons = [];
  pokemons.length = 151;
  pokemons.fill(null);
  return (
    <>
        <Listing pokemons={pokemons} />
    </>
  )
}
