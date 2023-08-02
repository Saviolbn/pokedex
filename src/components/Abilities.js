import { Tag } from '@chakra-ui/react';
import React, { useState } from 'react'


export const Abilities = ({ thisPokemon }) => {
  const Array1 = [];
  const Array2 = [];
  console.log(thisPokemon)
  thisPokemon.abilities.forEach((ability) => {
    Array1.push(ability.ability.name);
    Array2.push(ability.ability.url);
  })

  return (
    <div>
      Abilities:
      {Array1.map((ability, index) => {

        return <Tag
          justifyContent="center"
          minWidth="30%"
          backgroundColor="white"
          key={`${ability}`}
        >
          <a href={`${Array2[index]}`}>
            {ability}
          </a>
        </Tag>
      })}
    </div>
  )
}
