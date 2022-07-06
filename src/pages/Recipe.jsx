import React, { useEffect, useState } from 'react'

import instance from '../axios/axiosInstance'

import { useParams } from 'react-router-dom'
const Recipe = () => {
  const [recipe, setRecipe] = useState(null)
  const [activeTab, setActiveTab] = useState('instractions')

  const params = useParams()
  useEffect(() => {
    const getRecipe = async () => {
      const res = await instance.get(
        `${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      const data = res.data
      console.log(data)
      setRecipe(data)
    }
    getRecipe()
  }, [params])
  console.log(recipe)
  return (
    <div className='mt-14 mb-8 flex flex-wrap gap-8 w-full'>
      <div className='h-fit w-full lg:max-w-[20rem] '>
        <h2 className='mb-4 text-lg font-semibold'>{recipe?.title}</h2>
        <img
          src={recipe?.image}
          alt={recipe?.title}
          className='rounded-3xl object-cover w-full h-full '
        />
      </div>
      <div className='h-fit w-full lg:max-w-[45%]'>
        <div className='flex gap-4 mb-4'>
          <button
            className={`py-1 px-4 bg-gray-900 text-white rounded-md hover:bg-white hover:text-gray-900 hover:border hover:border-gray-900 ${
              activeTab === 'instractions'
                ? 'bg-white text-gray-900 border border-gray-900'
                : ''
            }`}
            onClick={() => setActiveTab('instractions')}>
            Instraction
          </button>{' '}
          <button
            className={`py-1 px-4 bg-gray-900 text-white rounded-md hover:bg-white hover:text-gray-900 hover:border hover:border-gray-900 ${
              activeTab === 'ingredients'
                ? 'bg-white text-gray-900 border border-gray-900'
                : ''
            }`}
            onClick={() => setActiveTab('ingredients')}>
            Ingredients
          </button>
        </div>
        {activeTab === 'instractions' ? (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: recipe?.instructions }}></div>
          </>
        ) : (
          <>
            <ul className='list-disc pl-6'>
              {recipe?.extendedIngredients?.map((ingredient, i) => (
                <li key={i}>
                  <h3>{ingredient.original}</h3>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default Recipe
