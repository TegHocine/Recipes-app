import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'

import { Routes, Route } from 'react-router-dom'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:category' element={<Cuisine />} />
      <Route path='/searched/:query' element={<Searched />} />
    </Routes>
  )
}

export default Pages
