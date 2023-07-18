import React, { useState } from 'react'
import { Listing } from '../components/Listing'

export const Home = () => {

  const [pokemonList,setPokemonList] = useState([{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 1
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
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
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 10
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 11
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 12
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 13
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 14
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 15
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 16
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 17
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 18
  },{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    types: [
      "grass", "poison"
    ],
    id: 19
  }]);

  const handleScrollEnd = () => {
    console.log(pokemonList);
    setPokemonList([...pokemonList, ...[{
      name: "jota",
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
