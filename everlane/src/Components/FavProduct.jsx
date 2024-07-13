import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
import '../Stylesheets/Product.css'
import {removeFav, bag as addToBag} from '../redux/shopReducer'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Product({ item }) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRemove = (item) => {
    dispatch(removeFav(item))
  }

  const handleMoveToBag = (item) =>{
    dispatch(addToBag(item))
    dispatch(removeFav(item))
  }

  return (
    <Card elevation={0}>
      <CardMedia
        style={{ objectFit: 'contain' }}
        component="img"
        height="130"
        image={item.gallery[0]}
        onClick={()=>navigate(`/product/${item.id}`)}
      />

      <CardContent style={{ paddingBottom: 0.5 }}>
        <Typography variant='body1'>
          <Box sx={{ fontWeight: 'bold' }}>{item.brand}</Box>
        </Typography>
        <Typography variant='body2'>
          {item.name}
        </Typography>
        <Typography variant='body2'>
          <Box sx={{ fontWeight: 'bold' }}>
            {item.price.label} {item.price.amount}
          </Box>
        </Typography>
      </CardContent>

      <button onClick={() => handleRemove(item)}>Remove from favorites</button>
      <button onClick={() => handleMoveToBag(item)}>Move to bag</button>

    </Card>
  )
}

export default Product
