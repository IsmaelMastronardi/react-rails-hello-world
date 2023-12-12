import React from 'react'
import { Greetings } from './Greetings'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  <Routes>
    <Route path="/" element={<Greetings />} />
  </Routes>
}
