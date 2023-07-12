import React from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import { Home } from '../pages/Home'
import { BaseRoute } from '../components/BaseRoute'
import { Pokemon } from '../pages/Pokemon'


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseRoute><Home /></BaseRoute>} />
        <Route path="/pokemon/:idPokemon" element={<BaseRoute><Pokemon/></BaseRoute>} />
      </Routes>
    </BrowserRouter>
  )
}
