import { MovieCreation } from '@mui/icons-material';
import { ConnectedTv } from '@mui/icons-material';
import { TrendingUp } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

export const BottomNavbar = () => {
  const navStyle={
      width: 300,
      position: 'fixed',
      bottom: 0,
      zIndex: 100,
      borderRadius: '10px',
      boxShadow: '0 0 15px black'

  }

  return (
    <Box sx={{display:'flex', justifyContent: 'center'}}>
      <BottomNavigation
        showLabels={true}
        style={navStyle}
        value={useLocation().pathname}
    >
      <BottomNavigationAction label="Trendings" icon={<TrendingUp />} 
              component = {NavLink}
              value = "/"
              to = "/"
      />
      <BottomNavigationAction label="Movies" icon={<MovieCreation />} 
              component = {NavLink}
              value = "/movies"
              to = "/movies"
      />
      <BottomNavigationAction label="Tv Series" icon={<ConnectedTv />}
              component = {NavLink}
              value = "/series"
              to = "/series"
      />
    </BottomNavigation>
    </Box>

    
  )
}
