import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    navigate(`/searched/${query}`)
  }
  return (
    <form
      onSubmit={onSubmit}
      className='w-full h-10 rounded-full text-white md:px-[20%] my-4'>
      <div className='w-full h-full flex justify-center items-center relative'>
        <button className='absolute right-0'>
          <FaSearch className=' rounded-full cursor-pointer h-full w-10 px-3' />
        </button>

        <input
          type='text'
          className='bg-gray-900 w-full h-full rounded-full px-8 outline-none'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SearchBar
