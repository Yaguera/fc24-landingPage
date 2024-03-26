import React from 'react'
import { logo } from '../../assets/img'
import { useState } from 'react'

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className='bg-[#151516] p-4'>
        <div className="logo"><img src={logo} alt="logo Fc 24" /></div>
    </header>
  )
}

export default Header