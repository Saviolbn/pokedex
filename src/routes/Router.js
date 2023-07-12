import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { BaseRoute } from '../components/BaseRoute'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseRoute><Home /></BaseRoute>} />
      </Routes>
    </BrowserRouter>
  )
}
