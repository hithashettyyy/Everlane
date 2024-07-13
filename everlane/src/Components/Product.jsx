import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
import '../Stylesheets/Product.css'

import { fav as addToFav, bag as addToBag } from '../redux/shopReducer'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function Product({ item, image, name, label, amount, brand }) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Card elevation={0}>
      <CardMedia
        style={{ objectFit: 'contain' }}
        component="img"
        height="150"
        image={image}
        onClick={()=>navigate(`/product/${item.id}`)}
      />

      <CardContent style={{ paddingBottom: 0.5 }}>
        <Typography variant='body1'>
          <Box sx={{ fontWeight: 'bold' }}>{brand}</Box>
        </Typography>
        <Typography variant='body2'>
          {name}
        </Typography>
        <Typography variant='body2'>
          <Box sx={{ fontWeight: 'bold' }}>
            {label} {amount}
          </Box>
        </Typography>
      </CardContent>

      <button onClick={() => dispatch(addToFav(item))} >Add to Favorites</button>
      <button onClick={() => dispatch(addToBag(item))}>Add to Bag</button>

    </Card>
  )
}

export default Product
