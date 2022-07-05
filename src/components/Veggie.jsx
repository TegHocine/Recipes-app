import React, { useEffect, useState } from 'react'

import instance from '../axios/axiosInstance'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Veggie = () => {
  const [veggie, setVeggie] = useState(null)
  useEffect(() => {
    const getVeggie = async () => {
      const check = localStorage.getItem('veggie')

      if (check) {
        setVeggie(JSON.parse(check))
      } else {
        const res = await instance.get(
          `random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&tags=vegetarian`
        )
        const data = res.data.recipes
        localStorage.setItem('veggie', JSON.stringify(data))
        setVeggie(data)
      }
    }

    getVeggie()
  }, [])
  return (
    <div>
      <div className='my-14'>
        <h3 className='my-4 text-lg font-semibold'>Our Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '2.5rem'
          }}>
          {veggie?.map((recipe, i) => (
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

export default Veggie
