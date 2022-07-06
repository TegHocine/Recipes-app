import React, { useEffect, useState } from 'react'

import instance from '../axios/axiosInstance'

import { Link, useParams } from 'react-router-dom'

const Cuisine = () => {
  const [cuisines, setCuisine] = useState(null)
  const params = useParams()

  useEffect(() => {
    const getCuisine = async () => {
      const res = await instance.get(
        `complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${params.category}`
      )
      const data = res.data.results
      setCuisine(data)
    }
    getCuisine()
  }, [params])

  return (
    <div className='grid grid-cols-autoC gap-4'>
      {cuisines?.map((cuisine, i) => (
        <Link
          key={i}
          to={`/recipe/${cuisine.id}`}
          className='min-h-[15rem] relative rounded-3xl overflow-hidden'>
          <p className='my-4 absolute bottom-0 w-full z-10 text-base font-semibold text-center text-white '>
            {cuisine.title}
          </p>
          <img
            src={cuisine.image}
            alt={cuisine.title}
            className='rounded-3xl object-cover w-full h-full absolute left-0'
          />
          <div className='absolute left-0 top-0 w-full h-full bg-black/[0.3]'></div>
        </Link>
      ))}
    </div>
  )
}

export default Cuisine
