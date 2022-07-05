import React, { useEffect, useState } from 'react'

import instance from '../axios/axiosInstance'

import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
const Searched = () => {
  const [searched, setSearched] = useState(null)
  const params = useParams()

  useEffect(() => {
    const getSearched = async () => {
      const res = await instance.get(
        `complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${params.query}`
      )
      const data = res.data.results
      console.log(data)
      setSearched(data)
    }
    getSearched()
  }, [params])
  console.log(searched)
  return (
    <div className='grid grid-cols-autoC gap-4 my-14'>
      {searched?.map((ressult) => (
        <div className='min-h-[15rem] relative rounded-3xl overflow-hidden'>
          <p className='my-4 absolute bottom-0 w-full z-10 text-base font-semibold text-center text-white '>
            {ressult.title}
          </p>
          <img
            src={ressult.image}
            alt={ressult.title}
            className='rounded-3xl object-cover w-full h-full absolute left-0'
          />
          <div className='absolute left-0 top-0 w-full h-full bg-black/[0.3]'></div>
        </div>
      ))}
    </div>
  )
}

export default Searched
