import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export const Listing = ({ pokemons }) => {
  return (
    <Container>
      <Heading bg="orange"> Chakra UI </Heading>
      <SimpleGrid columns={6} spacing={10}>
        {pokemons.map((index)=>{
          return <Box
          bg='tomato' 
          height='50px'>
          </Box>
        })}
      </SimpleGrid>
    </Container>
  )
}
