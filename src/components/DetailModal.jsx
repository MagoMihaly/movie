import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { getData } from '../pages/utils';
import { detailUrl } from '../pages/utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Carousel } from './Carousel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 44,
  p: 4,
};

export const DetailModal = ({open, setOpen, id, type}) => {
  const [data, setData] = useState(null);

  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_API_KEY}`;

  //console.log('id:', id, type);

  useEffect(()=>{
    getData(url, setData);
  },[]);
 
  console.log(data);

  const handleClose = () => setOpen(false);

  return (
    <div>     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="content-modal">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {data?.title || data?.name}
            </Typography>
          <div className='lazy-img'>           
            { data && (
              <LazyLoadImage 
              src={detailUrl + data?.backdrop_path}
              alt={data?.title || data?.name}
              placeholderSrc='vite.svg'
              />
            )}
          </div>
          <div>{data?.tagline}</div>
          <div>{data?.release_date || data?.first_air_date}</div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data?.overview}
          </Typography>
          </div> 
          <div><Carousel id={id} type={type}/></div>    
        </Box>  
      </Modal>
      
    </div>
  );
}