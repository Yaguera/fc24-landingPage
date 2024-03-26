import React from 'react'
import { hamburger, logo } from '../../assets/img'
import { useState } from 'react'

const Header = () => { 
  return (
    <header className='bg-[#151516] p-4 flex'>
        <div id='hamburger'><img src={hamburger} alt="menu Hamburger" /></div>
        <div id="logo"><img src={logo} alt="logo Fc 24" /></div>
    </header>
  )
}

export default Header