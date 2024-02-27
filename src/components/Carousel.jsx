import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getData, noPicture } from '../pages/utils';
import { posterUrl } from '../pages/utils';

const handleDragStart = (e) => e.preventDefault();
/*
const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];
*/
export const Carousel = ({id, type}) => {

  const [data, setData] = useState(null)

  const url = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`;

  useEffect(()=>{
    getData(url, setData);
  }, []);

  const responsive = {
    0: {items: 3},
    512: {items: 5},
    1024: {items: 7, itemsFit: 'contain',}
  }

  const imgStyle = {
    maxWidth: '60px',
    borderRadius: '5px',
    boxShadow: '0 0 5px gray',
    marignTop: '20px'
  }

  console.log(data?.cast);

  const items  = data? data.cast.map(obj=>(
    <div>
      <img src={obj.profile_path? posterUrl+"/"+obj?.profile_path : noPicture} 
      alt={obj?.name} 
      onDragStart={handleDragStart} 
      style={imgStyle} />
      <div style={{fontSize:'10px'}}>{obj?.name}</div>
    </div>

  )) : [];

    console.log(items);

  return (
    <div>
      <AliceCarousel mouseTracking items={items}
      responsive={responsive} />
    </div>
    
  );
}