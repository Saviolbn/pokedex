import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as Chartjs} from 'chart.js/auto'


export const StatGraph = ({ thisPokemon }) => {
  const Array1 = [];
  const Array2 = [];
  console.log(thisPokemon)
  thisPokemon.stats.forEach((stat) => { 
    Array1.push(stat.base_stat);
    
    Array2.push(stat.stat)
    })
  const [pokemonStats, setPokemonStats] = useState({
    labels: Array2,
    datasets: [{
      label:"Stats"
,      data:Array1}]
  })
  return (
    <div>
      <Bar data={pokemonStats}></Bar>
    </div>
  )
}
