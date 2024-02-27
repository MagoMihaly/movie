import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DetailModal } from './DetailModal';

export const Mycard = ({id, poster, title, date, type, vote}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Card sx={{ width: 300, position: 'relative', boxShadow:'0 0 8px white' }}>
      <CardMedia
        sx={{ height: 220 }}
        image = {poster}
        title={title}
      />
      <CardContent sx={{marginBottom:'1rem'}}>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.primary"
          sx={{display: 'flex', justifyContent: 'space-between'}}
        >
          <span>{date}</span>
          <span>{type}</span>
          <span>Vote:{vote}</span>         
        </Typography>
      </CardContent>
      <CardActions sx={{position: 'absolute', bottom: 0, left: 0}}>
        <Button className='mycard' size="small" onClick={handleOpen}>Details</Button>        
      </CardActions>
      {open && <DetailModal open={open} setOpen={setOpen} id={id} type={type}/>}
    </Card>
  );
}