import React from 'react'

import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Popular />
      <Veggie />
    </div>
  )
}

export default Home
