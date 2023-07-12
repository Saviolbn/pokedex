import React from 'react'
import { Listing } from '../components/Listing'
import { SideBar } from '../components/SideBar'
import { Center } from '@chakra-ui/react';

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
