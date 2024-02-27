import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getData } from './utils';
import { Loading } from '../components/Loading';
import { Mycard } from '../components/Mycard';
import { ContentPagination } from '../components/ContentPagination';
let url =`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`
import { posterUrl } from './utils';


export const Trendings = () => {
  const [trendings, setTrendings] = useState(null);
  const [isLoading,setIsloading] = useState(false);
  const [page,setPage] = useState(1);

  useEffect( ()=>{
    setIsloading(true)
    url = url + '&page=' + page
    getData(url, setTrendings)
    setIsloading(false)
  },[page] );

  trendings && console.log(trendings.results)

  return (
    <div style={{display:'flex', flexWrap:'wrap', gap: '10px', justifyContent:'center', paddingBottom: '65px'}}>
      <h3 style={{width:'100%', textAlign:'center'}}>Trendings</h3>
      <p style={{width:'100%', textAlign:'center', fontSize:'0.5rem'}}>page : {page}</p>
      {isLoading && <Loading />}
      {trendings && trendings.results.map(obj=>
        <Mycard key={obj.id}
          id={obj.id}
          poster={posterUrl + obj.poster_path}
          title={obj.title || obj.name}
          date={obj.first_air_date || obj.release_date}
          type={obj.media_type}
          vote={obj.vote_average}
          />
        )}

        <ContentPagination page={page} setPage={setPage}/>
    </div>
  )
}
