import { Box, Button, Flex, HStack, Icon, Image, Link, ListItem, PopoverArrow, SimpleGrid, Tag, Text, UnorderedList, VStack } from "@chakra-ui/react"
import { Link as RouterLink, useParams } from 'react-router-dom'
import { PokemonData } from '../constants/PokemonData';
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { getTypeColor } from "../utils/getTypeColor";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaTextHeight, FaWeight } from 'react-icons/fa'

export const PokemonInfo = ({ thisPokemon }) => {
  return (
    <>
      <HStack gap={2}>
        <Icon
          as={FaTextHeight}
        />
        <Text fontSize={'xl'}>
          Height: {thisPokemon.height}
        </Text>
      </HStack>

      <HStack gap={2}>
        <Icon
          as={FaWeight}
        />
        <Text fontSize={'xl'}>
          Weight: {thisPokemon.weight}
        </Text>
      </HStack>
    </>
  )
}


export const Types = ({ thisPokemon }) => {
  return (
    <VStack align={'start'} gap={2}>
      <Text fontSize={'xl'}>
        Type(s):
      </Text>
      <HStack>
        {thisPokemon.types.map((type, index) => 
            <Tag
            key={`${thisPokemon.id}${type}`} 
            backgroundColor={getTypeColor(type)}
            size={'lg'}
          >
            {type}
          </Tag>
        )}
      </HStack>
    </VStack>
  )
}

export const Abilities = ({ thisPokemon }) => {
  const Array1 = [];
  const Array2 = [];

  thisPokemon.abilities.forEach((ability) => {
    Array1.push(ability.ability.name);
    Array2.push(ability.ability.url);
  })

  return (
    <VStack align={'start'} gap={2}>
      <Text fontSize={'xl'}>
        Abilities:
      </Text>

      <HStack>
        {Array1.map((ability, index) => 
          <Tag
          size={'lg'}
            key={`${ability}`}
            backgroundColor="white"
            as={'a'}
            href={`${Array2[index]}`}
          >
            {ability}
          </Tag>
        )}
      </HStack>
    </VStack>
  )
}

export const StatGraph = ({ thisPokemon }) => {
  const Array1 = [];
  const Array2 = [];

  thisPokemon.stats.forEach((stat) => { 
    Array1.push(stat.base_stat);
    Array2.push(stat.stat)
  })

  return (
    <Box
      h={'300px'}
    >
      <Bar 
        options={{
          maintainAspectRatio: false
        }}
        height={'300px'}
        width={'100%'}
        data={{
          labels: Array2,
          datasets: [{
            label:"Stats",
            data:Array1
          }]
        }}
      />
    </Box>
  )
}


export const Sprites = ({thisPokemon}) => {
  return (
      <HStack w={'100%'}>
        <Image src={thisPokemon.sprites.back_default} w={'25%'}/>
        <Image src={thisPokemon.sprites.back_shiny} w={'25%'}/>
        <Image src={thisPokemon.sprites.front_default} w={'25%'}/>
        <Image src={thisPokemon.sprites.front_shiny} w={'25%'}/>
      </HStack>
    )
  }


export const NewPokemon = () => {
  const { idPokemon } = useParams();
  const { pokemonList, setPokemonList } = PokemonData();
  const thisPokemon = pokemonList.find(thisPokemon => thisPokemon.id == idPokemon)

  return (
    <Flex
      direction={'column'}
      bg='papayawhip'
      maxW={'1200px'}
      p={4}
      mx={{ sm: 4, lg: 'auto'}}
    >
      <Text fontSize={'3xl'} textAlign={'center'} mb={10}>
        {thisPokemon.id}. {thisPokemon.name}
      </Text>
  
      <SimpleGrid
        minChildWidth={'300px'}
        gap={4}
      >
        <Box
          h={'250px'}
          m={'0 auto'}
        >
          <Image
            title={`image src: ${thisPokemon.image.toString()}`}
            boxSize='100%'
            src={thisPokemon.image}
            css={`
              image-rendering: pixelated;
              image-rendering: -moz-crisp-edges;
              image-rendering: crisp-edges;
            `}
          />
        </Box>
        
        <VStack align={'start'}>
          <PokemonInfo thisPokemon={thisPokemon} />

          <Types thisPokemon={thisPokemon}></Types> 

          <Abilities thisPokemon={thisPokemon}></Abilities>

          <Sprites thisPokemon={thisPokemon}></Sprites>

        </VStack>

        <StatGraph thisPokemon={thisPokemon}></StatGraph>
      </SimpleGrid>

      <HStack justifyContent={'center'} gap={16} mt={'40px'}>
        <Button
          colorScheme="green"
          leftIcon={<ChevronLeftIcon/>}
          as={RouterLink}
          to={`/newPokemon/${parseInt(idPokemon) - 1}`}
        >
          prev
        </Button>
        
        <Text
          fontSize={'3xl'}
        >
         {idPokemon}
        </Text>
        
        <Button
          colorScheme="green"
          rightIcon={<ChevronRightIcon/>}
          as={RouterLink}
          to={`/newPokemon/${parseInt(idPokemon) + 1}`}
        >
          next
        </Button>
      </HStack>
    </Flex>
  )
}