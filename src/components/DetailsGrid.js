import { Grid, GridItem, Image, Link, ListItem, Tag, UnorderedList, css } from '@chakra-ui/react'
import React from 'react'

import { Link as PageLink, useParams } from 'react-router-dom';
import { PokemonData } from '../constants/PokemonData';
import { getTypeColor } from '../utils/getTypeColor';
import { StatGraph } from './StatGraph';
import { Abilities } from './Abilities';
import { Sprites } from './Sprites';
import { PokemonInfo } from './PokemonInfo';


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
          title={`image src: ${thisPokemon.image.toString()}`}
          boxSize='100%'
          src={thisPokemon.image}
          css={`
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
              `}
        />
      </ListItem>

      <ListItem width="50%" margin="auto" textAlign="center">
        {thisPokemon.id}. {thisPokemon.name}
      </ListItem>
      <ListItem width="50%" margin="auto" textAlign="center" >
        <PokemonInfo thisPokemon={thisPokemon} />
      </ListItem>
      <ListItem width="50%" margin="auto"
      >
        Type(s):
        {thisPokemon.types.map((type, index) => {
          return <Tag
            padding="6px"
            verticalAlign="middle"
            justifyContent="center"
            minWidth="30%"
            backgroundColor={getTypeColor(type)}
            key={`${thisPokemon.id}${type}`}
          >{type}</Tag>
        })}
      </ListItem>
      <ListItem width="50%" margin="auto" >
        <Abilities thisPokemon={thisPokemon}></Abilities>
      </ListItem>
      <ListItem width="50%" margin="auto" >
        <StatGraph thisPokemon={thisPokemon}></StatGraph>
      </ListItem>
      <ListItem width="40%" margin="auto" >
        <Sprites thisPokemon={thisPokemon}></Sprites>
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
