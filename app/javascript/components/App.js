import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Greetings from './Greetings'

console.log('1')

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  );
};
