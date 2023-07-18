import { Grid, GridItem, Image, Link } from '@chakra-ui/react'
import React from 'react'

import { Link as PageLink, useParams } from 'react-router-dom';


export const DetailsGrid = ({pokemons}) => {
  const { idPokemon } = useParams();
  return (
    <Grid fontSize="6xl" padding="10px"
      h='100%'
      templateRows='repeat(4, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={4}
    >
      <GridItem rowSpan={1} colSpan={1} bg='cyan' >
        <Image
          // _hover={{
          //   boxShadow: '2xl',
          //   transition: "all .3s ease-in-out",
          //   transform: "scale(1.2)"
          // }}
          minH="100%"
          src={pokemons.image} />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} bg='papayawhip' >
        text
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} bg='cyan' >
        options
      </GridItem>
      <GridItem rowSpan={1} colSpan={2} bg='papayawhip' >
        text
      </GridItem>
      <GridItem rowSpan={1} colSpan={3} bg='papayawhip' >
        text
      </GridItem>
      <GridItem display="flex"
        alignItems="center"
        justifyContent="space-between"
        rowSpan={1} colSpan={3} 
        bg='tomato' >
        <Link as={PageLink} to={`/pokemon/${parseInt(idPokemon) - 1}`}>prev</Link>
        {idPokemon}
        <Link as={PageLink} to={`/pokemon/${parseInt(idPokemon) + 1}`}>next</Link>
      </GridItem>
    </Grid>
  )
}
