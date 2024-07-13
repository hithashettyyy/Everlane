import React from 'react'
import '../Stylesheets/Women.css'
import { Grid } from '@mui/material'
import data from '../data/data.js'
import Card from '../Components/Product.jsx'
import { useSelector } from 'react-redux'

function Women() {

  const searchVal = useSelector(state => state.shop.searchVal).trim().toLowerCase()

  const searching = (item) => {
    return item.brand.toLowerCase().includes(searchVal)
  }

  const filteredData = searchVal.length === 0 ? data : data.filter(searching)

  return (
    <div id="women-products">

      <Grid container rowSpacing={1.5} columnSpacing={5} paddingLeft={8} >
        {filteredData.map(item => (
          <Grid item key={item.id} lg={3} >
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

    </div>
  )
}

export default Women
