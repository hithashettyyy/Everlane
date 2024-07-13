import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from 'react';
import '../Stylesheets/ImageSlider.css'

function ImageSlider({ images }) {

  const [imageIndex, setImageIndex] = useState(2)

  const leftClick = ()=>{
     if(imageIndex>0)
        setImageIndex((prev)=>prev-1)
  }

  const rightClick = ()=>{
    if(imageIndex<images.length-1)
       setImageIndex((prev)=>prev+1)
 }

  return (
    <div className='container'>

        <img
          src={images[imageIndex]}
          className='slider-img'
        />

      <button className='left' onClick={leftClick}>
        <SlArrowLeft size={30}/>
      </button>
      <button className='right' onClick={rightClick}>
        <SlArrowRight size={30}/>
      </button>

    </div>
  )
}

export default ImageSlider
