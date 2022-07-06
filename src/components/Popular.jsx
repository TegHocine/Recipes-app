import React, { useEffect, useState } from 'react'

import instance from '../axios/axiosInstance'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Link } from 'react-router-dom'

const Popular = () => {
  const [popular, setPopular] = useState(null)
  useEffect(() => {
    const getPopular = async () => {
      const check = localStorage.getItem('popular')

      if (check) {
        setPopular(JSON.parse(check))
      } else {
        const res = await instance.get(
          `random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
        )
        const data = res.data.recipes
        localStorage.setItem('popular', JSON.stringify(data))
        setPopular(data)
      }
    }

    getPopular()
  }, [])
  return (
    <div>
      <div className='my-14'>
        <h3 className='my-4 text-lg font-semibold'>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '2rem'
          }}>
          {popular?.map((recipe, i) => (
            <SplideSlide key={i}>
              <Link
                to={`/recipe/${recipe.id}`}
                className='min-h-[15rem] relative rounded-3xl overflow-hidden'>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className='rounded-3xl object-cover w-full h-auto border border-gray-300'
                />
                <p className='my-2 w-full text-base font-semibold text-center text-gray-900 '>
                  {recipe.title}
                </p>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default Popular
