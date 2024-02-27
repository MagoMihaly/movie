import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const ContentPagination = ({page, setPage}) => {
  const handleChange = (event,pageNr) => {
    
    //console.log('oldal' ,pageNr);
    setPage(pageNr)
    window.scrollTo(0,0)
  }

  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Stack spacing={2}>
          <Pagination 
          count={10}
          color="secondary" 
          page={page}
          onChange={handleChange}
          />     
        </Stack>
    </div>
    
  );
}