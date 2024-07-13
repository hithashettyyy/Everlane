import React from 'react'
import { useSelector } from 'react-redux'
import '../Stylesheets/Bag.css'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import {MRP as calculateMRP} from '../redux/shopReducer'
import Card from '../Components/BagProduct.jsx'
import {useEffect} from 'react'


function Bag() {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const bagList = useSelector(state => state.shop.bagArray)
  const MRP = useSelector(state=>state.shop.MRP)
  const isLoggedIn = useSelector(state=>state.shop.isLoggedIn)

  const platform_fee = 20
  const shipping = 'FREE'
  const discount = 0.1

  useEffect(()=>{
     if(bagList.length>0){
      const totalMRP = bagList.reduce((acc, cur) => acc + cur.price.amount, 0)
      dispatch(calculateMRP(totalMRP))
     }
  },[bagList,dispatch])
  

  return (
    <div id="bag-container" style={{ marginLeft: 20, marginTop: 96 }}>

      {
         isLoggedIn===false && 
            <div className='login'>
               <h2>Log in to add items to your bag</h2>
               <button onClick={()=>navigate('/login')}>LOG IN</button>
            </div>
      }

      {bagList.length === 0 && isLoggedIn===true && 
        <div id="empty-bag-div">
          <h3>Looks like you haven't added anything to the bag</h3>
          <button style={{ opacity: 1 }} onClick={() => navigate('/favorites')} id="go-to-faves">Add from Favorites</button>
        </div>
      }

      {
        bagList.length !== 0 && isLoggedIn===true &&
        <>
          <Grid container rowSpacing={2} width={800}>
            {
              bagList.map(item => (
                <Grid item key={item.id} lg={12}>
                  <Card
                    item={item}
                    brand={item.brand}
                    image={item.gallery[0]}
                    name={item.name}
                    label={item.price.label}
                    amount={item.price.amount}
                  />
                </Grid>
              ))
            }
          </Grid>

          <div id="bag-summary">
            <h2>BAG SUMMARY</h2>
            <p>Total MRP - ₹ {MRP}</p>
            <p>Discount - ₹ {MRP * discount} (10%)</p>
            <p>Platform fee - ₹ {platform_fee}</p>
            <p>Shipping fee - {shipping}</p>
            <p>Total Amount - ₹ {MRP - MRP*discount} </p>
            <button id="place-order">PLACE ORDER</button>
          </div>

        </>

      }



    </div>
  )
}

export default Bag
