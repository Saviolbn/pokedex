import { Box, Image, Link, Tag, Text, keyframes } from '@chakra-ui/react';
import React from 'react'
import { Link as PageLink } from 'react-router-dom'
import { getTypeColor } from '../utils/getTypeColor';

const bounceUp = keyframes`
0%, 100%, 20%, 50%, 80% {
  -webkit-transform: translateY(0);
  -ms-transform:     translateY(0);
  transform:         translateY(0)
}
40% {
  -webkit-transform: translateY(-20px);
  -ms-transform:     translateY(-20px);
  transform:         translateY(-20px)
}
60% {
  -webkit-transform: translateY(-10px);
  -ms-transform:     translateY(-10px);
  transform:         translateY(-10px)
}
`;

export const Pokemons = ({pokemon, index}) => {
  const bounceAnimation = `${bounceUp} 1s`
  return (
    <Box
      key={pokemon.id}
      border="1px"
      height='300px'
      width='300px'>
      <Link as={PageLink} to={`/pokemon/${index}`}>
        <Image
          _hover={{
            transition: "all .3s ease-in-out",
            animation: bounceAnimation
          }}
          backgroundColor="lightgray"
          objectFit="contain"
          w="100%"
          h="75%"
          src={pokemon.image} />
      </Link>
      <Text fontWeight="bold" fontSize="2xl" textAlign="center"> {pokemon.id}. {pokemon.name} </Text>
      <Box display="flex" justifyContent="space-evenly">
        {pokemon.types.map((type, index) => {
          return <Tag justifyContent="center" minWidth="30%" backgroundColor={getTypeColor(type)} key={`${pokemon.id}${type}`}>{type}</Tag>
        })}
      </Box>
    </Box>
  )
}
