import { Box, Tag } from '@chakra-ui/react';
import React, { useState } from 'react'


export const PokemonInfo = ({ thisPokemon }) => {
  

  return (
    <>
    <Box>Height: {thisPokemon.height}</Box>
    <Box>Weight: {thisPokemon.weight}</Box>
    </>
  )
}
