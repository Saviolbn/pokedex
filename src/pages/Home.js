import React from 'react'
import { Listing } from '../components/Listing'

export const Home = () => {
  const pokemons = [{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 1
  }];
  return (
    <>
      <Listing pokemons={pokemons} />
    </>
  )
}
