import { Grid, GridItem, Image, Link, Tag } from '@chakra-ui/react'
import React from 'react'

import { Link as PageLink, useParams } from 'react-router-dom';
import { PokemonData } from '../constants/PokemonData';
import { getTypeColor } from '../utils/getTypeColor';


export const DetailsGrid = ({ idPokemon }) => {

  const { pokemonList, setPokemonList } = PokemonData();
  const thisPokemon = pokemonList.find(thisPokemon => thisPokemon.id == idPokemon)
  console.log(thisPokemon)

  return (
    <Grid fontSize="2xl" padding="10px"
      h='100%'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap={2}
    >
      <GridItem rowSpan={1} maxW="50%" Height="50%" colSpan={1} >
        <Image
          // _hover={{
          //   boxShadow: '2xl',
          //   transition: "all .3s ease-in-out",
          //   transform: "scale(1.2)"
          // }}
          maxH="100%"
          src={thisPokemon.image}
        />
      </GridItem>
      
      <GridItem rowSpan={1} colSpan={1} bg='papayawhip' >
        {thisPokemon.id}. {thisPokemon.name}<br/><br/>
        image src:<br/> 
        {thisPokemon.image.toString()}
      </GridItem>
      <GridItem rowSpan={1} colSpan={2} bg='white' >
        Type(s):<br/>
        {thisPokemon.types.map((type, index) => {
          
          return <Tag
            justifyContent="center"
            minWidth="30%"
            backgroundColor={getTypeColor(type)}
            key={`${thisPokemon.id}${type}`}
          >{type}</Tag>
        })}
      </GridItem>
      <GridItem display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        rowSpan={1} colSpan={2}
        bg='tomato' >
        <Link as={PageLink} to={`/pokemon/${parseInt(idPokemon) - 1}`}>prev</Link>
        {idPokemon}
        <Link as={PageLink} to={`/pokemon/${parseInt(idPokemon) + 1}`}>next</Link>
      </GridItem>
    </Grid>
  )
}
