import { Grid, GridItem, Image, Link, ListItem, Tag, UnorderedList, css } from '@chakra-ui/react'
import React from 'react'

import { Link as PageLink, useParams } from 'react-router-dom';
import { PokemonData } from '../constants/PokemonData';
import { getTypeColor } from '../utils/getTypeColor';
import { StatGraph } from './StatGraph';


export const DetailsGrid = ({ idPokemon }) => {

  const { pokemonList, setPokemonList } = PokemonData();
  const thisPokemon = pokemonList.find(thisPokemon => thisPokemon.id == idPokemon)
  console.log(thisPokemon)

  return (<div>
    <UnorderedList
      bg='papayawhip'
      height="100%"
      listStyleType="none"
      fontSize="2xl"
      margin="0px"
    >
      <ListItem 
      width="50%"
      margin="auto">
        <Image
          boxSize='100%'
          src={thisPokemon.image}
          css={`
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
              `}
        />
      </ListItem>

      <ListItem width="100%"  >
        {thisPokemon.id}. {thisPokemon.name}
      </ListItem>
      <ListItem
      
      margin="auto"
      >
        Type(s):
        {thisPokemon.types.map((type, index) => {

          return <Tag
            justifyContent="center"
            minWidth="30%"
            backgroundColor={getTypeColor(type)}
            key={`${thisPokemon.id}${type}`}
          >{type}</Tag>
        })}
      </ListItem>
      <ListItem width="100%" >
        image src:<br />
        {thisPokemon.image.toString()}
      </ListItem>
      <ListItem width="100%" >
        <StatGraph data ={thisPokemon}></StatGraph>
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
  </div>
  )
}
