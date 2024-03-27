import React from 'react'
import { heroImg } from '../assets/img'

const Hero = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <img className='mt-16 lg:mt-0 w-screen' src={heroImg} alt="" />
    </div>
  )
}

export default Hero
