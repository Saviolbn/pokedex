import React from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import { Home } from '../pages/Home'
import { BaseRoute } from '../components/BaseRoute'
import { Pokemon } from '../pages/Pokemon'
import { NewHome } from '../pages/NewHome'
import { NewPokemon } from '../pages/NewPokemon'


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseRoute><Home /></BaseRoute>} />
        <Route path="/pokemon/:idPokemon" element={<BaseRoute><Pokemon/></BaseRoute>} />
        <Route path='/newhome' element={<NewHome/>} />
        <Route path="/newpokemon/:idPokemon" element={<NewPokemon/>} />
      </Routes>
    </BrowserRouter>
  )
}
