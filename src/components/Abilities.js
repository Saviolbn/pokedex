import { Tag } from '@chakra-ui/react';
import React, { useState } from 'react'


export const Abilities = ({ thisPokemon }) => {
  const Array1 = [];
  console.log(thisPokemon)
  thisPokemon.abilities.forEach((ability) => { 
    Array1.push(ability.ability.name);

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
          >{ability}</Tag>
        })}
    </div>
  )
}
