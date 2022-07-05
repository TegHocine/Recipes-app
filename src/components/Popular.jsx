import React, { useEffect, useState } from 'react'

import instance from '../axios/axiosInstance'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

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
              <div className='min-h-[15rem] relative rounded-3xl overflow-hidden'>
                <p className='my-4 absolute bottom-0 w-full z-10 text-base font-semibold text-center text-white '>
                  {recipe.title}
                </p>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className='rounded-3xl object-cover w-full h-full absolute left-0'
                />
                <div className='absolute left-0 top-0 w-full h-full bg-black/[0.3]'></div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default Popular
