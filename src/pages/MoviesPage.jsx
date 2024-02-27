import React from 'react'
import { Genres } from '../components/Genres'
import { Movies } from '../components/Movies'
import { useState } from 'react'

export const MoviesPage = () => {
  const [urlForGenres,setUrlForGenres] = useState('')
  console.log(urlForGenres);

  return (
    <div>
      <h3 style={{width:'100%', textAlign:'center', paddingTop:'20px'}}>Movies</h3>
      <Genres setUrlForGenres={setUrlForGenres} type='movie'/>
      <Movies urlForGenres={urlForGenres}/>
    </div>
  )
}
