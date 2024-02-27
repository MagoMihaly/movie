import { Chip } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { RadioButtonUnchecked } from '@mui/icons-material';


export const SingleChip = ({name, id, selectedGenres, setSelectedGenres}) => {

  const [selected, setSelected] = useState(false)

  const handleClick=()=>{
    if(selectedGenres.indexOf(id)==-1){
      setSelected(true)
      setSelectedGenres((prev)=>[...prev, id])
    }else{
      setSelected(false)
      setSelectedGenres (selectedGenres.filter(item=>item!=id))
    }
  }

  return (
    <div>
      <Chip
      clickable
      onClick={()=>handleClick()}
      label={name}
      icon={selected ? <DoneIcon/> : <RadioButtonUnchecked/>}
      />

    </div>
  )
}

 