import { Box, Center, Container, Heading, Link, LinkBox, LinkOverlay, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link as PageLink } from 'react-router-dom'


export const Listing = ({ pokemons }) => {
  return (
    
      <SimpleGrid columns={3} spacing={10} >
        {pokemons.map((icon, index) => {
          return <Link as={PageLink} to={`/pokemon/${index}`}>
            <Box
              key={index}
              bg='tomato'
              border="1px"
              height='200px'
              width='300px'>
            </Box>
          </Link>
        })}
      </SimpleGrid>
    
  )
}
