import React from 'react'
import '../Stylesheets/Favorites.css'
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@mui/material'
import Card from '../Components/FavProduct.jsx'
import { useNavigate } from 'react-router-dom'



function Favorites() {

  const favList = useSelector(state => state.shop.favArray)
  const isLoggedIn = useSelector(state => state.shop.isLoggedIn)
  const navigate = useNavigate()

  return (
    <>
      {
        isLoggedIn === false &&
        <div className='login'>
          <h2>Log in to add items to your favorites</h2>
          <button onClick={() => navigate('/login')}>LOG IN</button>
        </div>
      }

      {isLoggedIn === true && <div id="fav">

        <h3 id="fav-count">My favorites: {favList.length} items</h3>

        <Grid container rowSpacing={1} columnSpacing={5}>
          {favList.map(item => (
            <Grid item key={item.id} md={3} sm={4} sx={6} >
              <Card
                item={item}
                brand={item.brand}
                image={item.gallery[0]}
                name={item.name}
                label={item.price.label}
                amount={item.price.amount}
              />
            </Grid>
          ))}
        </Grid>

      </div>}
    </>
  )
}

export default Favorites
