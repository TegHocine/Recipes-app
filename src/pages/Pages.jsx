import React from 'react'

import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'

import { Routes, Route } from 'react-router-dom'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:category' element={<Cuisine />} />
      <Route path='/searched/:query' element={<Searched />} />
      <Route path='/recipe/:id' element={<Recipe />} />
    </Routes>
  )
}

export default Pages
