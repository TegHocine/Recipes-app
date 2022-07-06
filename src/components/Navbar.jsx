import React from 'react'

import SearchBar from './SearchBar'
import Category from './Category'
import { Link } from 'react-router-dom'

import { GiKnifeFork } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='mt-6'>
      <Link to='/' className='flex gap-2 font-semibold items-center text-lg'>
        <GiKnifeFork /> Deliciouss
      </Link>
      <SearchBar />
      <Category />
    </div>
  )
}

export default Navbar
