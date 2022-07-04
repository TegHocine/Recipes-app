import React from 'react'

import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Veggie />
      <Popular />
    </div>
  )
}

export default Home
