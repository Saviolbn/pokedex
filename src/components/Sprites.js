import { Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export const Sprites = ({thisPokemon}) => {
  return (
    <SimpleGrid columns={4} spacing={0}>
      <Image src={thisPokemon.sprites.back_default}/>
      <Image src={thisPokemon.sprites.back_shiny}/>
      <Image src={thisPokemon.sprites.front_default}/>
      <Image src={thisPokemon.sprites.front_shiny}/>
    </SimpleGrid>
    )
  }
