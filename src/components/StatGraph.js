import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'

export const StatGraph = ({ thisPokemon }) => {
  const Array1 = [];
  const Array2 = [];
  thisPokemon.stats.forEach((stat) => { 
    Array1.push(stat.base_stat);
    
    Array2.push(stat.stat)
    })
  const [pokemonStats, setPokemonStats] = useState({
    labels: Array1,
    datasets: Array2
  })
  return (
    <div>
      <Bar data={pokemonStats} ></Bar>
    </div>
  )
}
