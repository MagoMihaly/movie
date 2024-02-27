import React from 'react'
import { useState } from 'react';
import { getData } from '../pages/utils';
import { useEffect } from 'react';
import { ContentPagination } from './ContentPagination';
import { posterUrl } from '../pages/utils';
import { Mycard } from './Mycard';
import { Loading } from './Loading';

let url=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&sort_by=popularity.desc`

export const Movies = ({urlForGenres}) => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect( ()=>{
    setIsloading(true)
    url=url+'&page='+page+ '&with_genres='+urlForGenres
    getData(url, setMovies)
    setIsloading(false)
  },[page, urlForGenres] );

 // movies && console.log(movies.results)


  return (
    <div style={{display:'flex', flexWrap:'wrap', gap: '10px', justifyContent:'center', paddingBottom: '65px'}}>  
    <p style={{width:'100%', textAlign:'center', fontSize:'0.5rem'}}>You are on page : {page}</p>
    <ContentPagination page={page} setPage={setPage}/>
    {isLoading && <Loading />}
    {movies && movies.results.map(obj=>
      <Mycard key={obj.id}
        id={obj.id}
        poster={posterUrl + obj.poster_path}
        title={obj.title || obj.name}
        date={obj.first_air_date || obj.release_date}
        type="movie"
        vote={obj.vote_average}
        />
      )}

      <ContentPagination page={page} setPage={setPage}/>
  </div>
  )
}

