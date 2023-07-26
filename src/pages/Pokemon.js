import { Box, Grid, GridItem, Image, Link } from '@chakra-ui/react';
import React from 'react'
import { DetailsGrid } from '../components/DetailsGrid'
import { useParams } from 'react-router-dom';



export const Pokemon = () => {
  const { idPokemon } = useParams();

  // pokemonList.findIndex
  return (
    <Box 
      margin="auto"
      border='1px'
      h="auto"
      w="100%"
      bgColor="lightgray"
    >
      <DetailsGrid idPokemon={idPokemon}>
      </DetailsGrid>
    </Box>

  )
}
