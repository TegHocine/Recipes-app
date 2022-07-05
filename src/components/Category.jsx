import React from 'react'

import { NavLink } from 'react-router-dom'

import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiSlicedBread } from 'react-icons/gi'

const Category = () => {
  const navStyle =
    'flex justify-center items-center flex-col gap-1 bg-gray-900 rounded-full w-16 h-16 md:w-20 md:h-20'
  const navActive =
    'flex justify-center items-center flex-col gap-1 bg-red-900 rounded-full w-16 h-16 md:w-20 md:h-20'
  return (
    <div className='flex justify-center items-center gap-4 my-4 text-white flex-wrap'>
      <NavLink
        to='/cuisine/italian'
        className={(navData) => (navData.isActive ? navActive : navStyle)}>
        <FaPizzaSlice />
        <h4 className='text-xs md:text-md'>Italian</h4>
      </NavLink>
      <NavLink
        to='/cuisine/american'
        className={(navData) => (navData.isActive ? navActive : navStyle)}>
        <FaHamburger />
        <h4 className='text-xs md:text-md'>American</h4>
      </NavLink>
      <NavLink
        to='/cuisine/thai'
        className={(navData) => (navData.isActive ? navActive : navStyle)}>
        <GiNoodles />
        <h4 className='text-xs md:text-md'>Thai</h4>
      </NavLink>
      <NavLink
        to='/cuisine/French'
        className={(navData) => (navData.isActive ? navActive : navStyle)}>
        <GiSlicedBread />
        <h4 className='text-xs md:text-md'>French</h4>
      </NavLink>
    </div>
  )
}

export default Category
