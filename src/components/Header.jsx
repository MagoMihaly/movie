import React from 'react'
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import './Header.css'

export const Header = () => {
  return (

    <h1 className='header'>
      <LocalMoviesOutlinedIcon />
      Movies
    </h1>
  )
}
