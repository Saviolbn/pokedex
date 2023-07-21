import { SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Pokemons } from './Pokemons'
import InfiniteScroll from 'react-infinite-scroll-component'



export const Listing = ({ pokemonList, handleScrollEnd }) => {

  
  return (

    <InfiniteScroll
      dataLength={pokemonList.length}
      next={handleScrollEnd}
      hasMore={true}>
      <SimpleGrid columns={3} spacing={10} >
        {pokemonList.map((pokemon, index) => {
          console.log(pokemonList);
          return (
            <Pokemons pokemon={pokemon} index={index} />
          )
        })}</SimpleGrid>
    </InfiniteScroll>

  )
}