import React from 'react'
import '../Stylesheets/SingleProduct.css'
import { useParams } from 'react-router-dom'
import data from '../data/data.js'
import { useDispatch } from 'react-redux'
import {fav as addToFav,bag as addToBag} from '../redux/shopReducer.js'

function SingleProduct() {

  const { id } = useParams()
  const item = data.find(element => element.id === id)

  const dipatch = useDispatch()

  return (
      <div id="single-product-container">

        <div id="product-images">
            {item.gallery.map(photo=>(
               <img id="each-image"src={photo}/>
            ))}
        </div>

        <div id="product-details">
          <h4>{item.brand.toUpperCase()}</h4>
          <p>{item.name}</p>
          <p style={{fontWeight:'bold'}}>{item.price.label}{item.price.amount}</p>
          <p> Discount : 10%</p>
          <p style={{fontSize:'smaller'}}>Delivery by July 18 2024</p>
          <button onClick={()=>dipatch(addToFav(item))}>Add to Favorites</button> 
          <button onClick={()=>dipatch(addToBag(item))}>Add to Bag</button>
        </div>
      </div>

  )
}

export default SingleProduct
