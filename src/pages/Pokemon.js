import React from 'react'
import { useParams } from 'react-router-dom';

export const Pokemon = () => {
  const { idPokemon } = useParams();
  return (
    <div>{idPokemon}</div>
  )
}
