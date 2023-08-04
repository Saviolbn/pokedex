import { Box, Flex, Image, Link, SimpleGrid, Tag, Text, keyframes } from "@chakra-ui/react";
import InfiniteScroll from 'react-infinite-scroll-component'
import { getTypeColor } from '../utils/getTypeColor';
import { Link as RouterLink } from 'react-router-dom'
import { PokemonData } from '../constants/PokemonData'

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
    <Flex
      direction={'column'}
      h={'200px'}
      _hover={{
        transition: "all .3s ease-in-out",
        animation: bounceAnimation
      }}
    >

      <Link 
        as={RouterLink} 
        to={`/newPokemon/${index}`} 
        h={'65%'}
        backgroundColor="gray.200"
        p={4}
      >
        <Image
          objectFit="contain"
          src={pokemon.image} 
          w={'100%'}
          h={'100%'}
          m={'0 auto'}
        />
      </Link>

      <Box flex={1}>
        <Text 
          fontWeight="bold" 
          fontSize="2xl" 
          textAlign="center"
        > 
          {pokemon.id}. {pokemon.name} 
        </Text>
        
        <Box display="flex" justifyContent="space-evenly">
          {pokemon.types.map((type, index) => {
            return (
              <Tag 
                justifyContent="center" 
                minWidth="30%" 
                backgroundColor={getTypeColor(type)} 
                key={`${pokemon.id}${type}`}
              >
                {type}
              </Tag>
            )
          })}
        </Box>
      </Box>
    </Flex>
  )
}


export const NewHome = () => {
  const { pokemonList, setPokemonList } = PokemonData();

  const handleScrollEnd = () => {
    setPokemonList([
      ...pokemonList, 
      ...[{
        name: "Bulbasaur",
        image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
        types: [
          "grass", "poison"
        ]
      }]
    ])
  }
  
  return (
    <Box
      p={4}
    > 
      <InfiniteScroll
        dataLength={pokemonList.length}
        next={handleScrollEnd}
        hasMore={true}
      >
        <SimpleGrid minChildWidth={'200px'} spacing={'10px'}>
          {pokemonList.map((pokemon, index) => {
            console.log(pokemonList);

            return (
              <Pokemons pokemon={pokemon} index={index+1} />
            )
          })}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  )
}