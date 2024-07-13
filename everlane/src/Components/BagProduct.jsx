import React from 'react'
import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import '../Stylesheets/BagProduct.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {fav as addToFav, removeBag} from '../redux/shopReducer'


function BagProduct({ item}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleClick = (item)=>{
     dispatch(removeBag(item))
     dispatch(addToFav(item))
  }

  return (
    <Card elevation={0} style={{ paddingTop: 0, borderRadius: 0, }}>
      <div id="bag-product">
        <CardMedia
          style={{ objectFit: 'contain', width: 200, padding: 15 }}
          component="img"
          image={item.gallery[0]}
          height="150"
          onClick={()=>navigate(`/product/${item.id}`)}
        />
        <CardContent>
          <h4>{item.brand.toUpperCase()}</h4>
          <p>{item.name}</p>
          <p className='amount'>{item.price.label} {item.price.amount}</p>
          <p className='return'>14 days return available</p>
          <p className='delivery'>Delivery by July 18 2024</p>
        </CardContent>

        <div id="bag-btn-div">
          <button onClick={()=>handleClick(item)} className="bag-button">
            Move to favorites
          </button>
          <button onClick={()=>dispatch(removeBag(item))} className='bag-button'>
            Remove from bag
          </button>
        </div>

      </div>
    </Card>
  )
}

export default BagProduct
