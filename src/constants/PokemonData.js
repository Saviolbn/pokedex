import React from 'react'
import { useState } from 'react';

export const PokemonData = () => {
  const [pokemonList,setPokemonList] = useState([{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 1
  },{
    name: "Bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: [
      "grass", "poison"
    ],
    id: 2
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 3
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 4
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 5
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 6
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 7
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 8
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 9
  }]);
  return {pokemonList,setPokemonList}
}
