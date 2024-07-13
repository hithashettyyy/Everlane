import React from 'react'
import '../Stylesheets/Error404.css'
import error from '../assets/error.png'

function Error404() {
  return (
    <div id="error-container">
       <img id="error" src={error} alt="error image"/>
    </div>
  )
}

export default Error404
