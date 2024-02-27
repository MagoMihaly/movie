import React from 'react'
import { Genres } from '../components/Genres'
import { useState } from 'react'
import { TvSeries } from '../components/TvSeries'

export const TvSeriesPage = () => {
  const [urlForGenres,setUrlForGenres] = useState('')
  console.log(urlForGenres);

  return (
    <div>
      <h3 style={{width:'100%', textAlign:'center', paddingTop:'20px'}}>Tv Series</h3>
      <Genres setUrlForGenres={setUrlForGenres} type='tv'/>
      <TvSeries urlForGenres={urlForGenres}/>
    </div>
  )
}
