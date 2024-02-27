import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getData } from '../pages/utils';
import { SingleChip } from './SingleChip';

export const Genres = ({type, setUrlForGenres}) => {
  let urlGenres= `https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}`

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState(null);

  useEffect(()=>{
    getData(urlGenres, setGenres)
  },[])

  useEffect(()=>{
    if(selectedGenres.length ==0) setUrlForGenres('');
    else setUrlForGenres(selectedGenres.join(','))
  },[selectedGenres])

  //genres && console.log(genres.genres);
  //console.log(selectedGenres);

  return (
    <div style={{display:'flex', flexWrap: 'wrap', gap: '3px', justifyContent:'center', paddingTop: '15px'}}>
      {genres && genres.genres.map(obj=>
        <SingleChip key={obj.id} {...obj} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
        )}
    </div>
  )
}
