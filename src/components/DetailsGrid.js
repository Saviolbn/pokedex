import { Grid, GridItem, Image, Link, ListItem, Tag, UnorderedList } from '@chakra-ui/react'
import React from 'react'

import { Link as PageLink, useParams } from 'react-router-dom';
import { PokemonData } from '../constants/PokemonData';
import { getTypeColor } from '../utils/getTypeColor';


export const DetailsGrid = ({ idPokemon }) => {

  const { pokemonList, setPokemonList } = PokemonData();
  const thisPokemon = pokemonList.find(thisPokemon => thisPokemon.id == idPokemon)
  console.log(thisPokemon)

  return (
    <UnorderedList
      listStyleType="none"
      fontSize="2xl"
    >
      <ListItem>
        <Image
          backgroundColor="blue"
          boxSize='50%'
          src={thisPokemon.image}
        />
      </ListItem>

      <ListItem width="100%"  bg='papayawhip' >
        {thisPokemon.id}. {thisPokemon.name}<br /><br />
        image src:<br />
        {thisPokemon.image.toString()}
      </ListItem>
      <ListItem  bg='white' >
        Type(s):<br />
        {thisPokemon.types.map((type, index) => {

          return <Tag
            justifyContent="center"
            minWidth="30%"
            backgroundColor={getTypeColor(type)}
            key={`${thisPokemon.id}${type}`}
          >{type}</Tag>
        })}
      </ListItem>
      <ListItem
        height="40px"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        rowSpan={1} colSpan={2}
        bg='tomato' >
        <Link as={PageLink} to={`/pokemon/${parseInt(idPokemon) - 1}`}>prev</Link>
        {idPokemon}
        <Link as={PageLink} to={`/pokemon/${parseInt(idPokemon) + 1}`}>next</Link>
      </ListItem>
    </UnorderedList>
  )
}
