import React from 'react'
import ImageSlider from '../Components/ImageSlider'
import img1 from '../assets/slider_images/slide1.jpg'
import img2 from '../assets/slider_images/slide2.jpg'
import img3 from '../assets/slider_images/slide3.jpg'
import img4 from'../assets/slider_images/slide4.jpg'


const sliderImages = [img1,img2,img3,img4]

function Home() {
  return (
      <ImageSlider
         images = {sliderImages}
      />
  )
}

export default Home

