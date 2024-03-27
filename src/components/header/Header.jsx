import React from 'react'
import { hamburger, logo } from '../../assets/img'
import { useState } from 'react'

const Header = () => { 
  const  [isOpen, setIsOpen] = useState(false);
  const handleNav = () =>  setIsOpen(!isOpen);
  return (
    <header className='fixed w-full lg:bg-black bg-[#151516]'>
        <nav className='max-container flex items-center p-4'>
          {/* <div id='hamburger'><img className='w-8' src={hamburger} alt="menu Hamburger" /></div> */}
          <div id="logo" className='flex items-center gap-3'>
            <div onClick={handleNav} className='hidden max-lg:block'><i className='fas fa-bars font-normal text-[#7c7c7c] hover:text-[#2c943f] text-2xl '></i></div>
              <img className='w-28' src={logo} alt="logo Fc 24" />
            </div>
          <div className='justify-end flex  lg:justify-between w-full ml-10 '>
            <ul className='hidden lg:flex gap-5'>
              <li onClick={handleNav} className='text-white flex gap-3 items-center py-2'>About<i className='fas fa-caret-down'></i></li>
              <li onClick={handleNav} className='text-white flex gap-3 items-center py-2'>Feature<i className='fas fa-caret-down'></i></li>
              <li onClick={handleNav} className='text-white flex gap-3 items-center py-2'>Ultimate Team<i className='fas fa-caret-down'></i></li>
              <li onClick={handleNav} className='text-white flex gap-3 items-center py-2'>Ultimate Team Hub<i className='fas fa-caret-down'></i></li>
              <li onClick={handleNav} className='text-white flex gap-3 items-center py-2'>FC 24 Rating<i className='fas fa-caret-down'></i></li>
              <li onClick={handleNav} className='text-white flex gap-3 items-center py-2'>News & Community<i className='fas fa-caret-down'></i></li> 
            </ul>
            <button className='bg-[#07F468] py-2 px-9 rounded-full font-bold'>Buy Now <i className='fas fa-caret-down'></i></button>
          </div>
        </nav>         
        <div className={isOpen ? 'fixed bg-[#000000] z-30 h-screen w-[85vw] top-0 -left-0 shadow-[rgba(0,0,15,0.1)_10px_0px_4px_0px] ease-in-out duration-700 transform translate-x-[0%]' : 'fixed md:hidden h-screen top-0 w-[60vw] bg-[#000300] ease-in-out duration-500 transform -translate-x-[120%]'}>
          <div className='bg-[#151516] flex justify-between w-full'>
              <a href="/#">
                <img className='ml-3 p-4 w-40' src={logo} alt="logo"
                width={130}
                height={29}
                />
              </a>
              <button onClick={handleNav}><i className='fas fa-close text-white text-2xl mr-7'></i></button>
          </div>
          <ul className='flex flex-col gap-9 mt-9 m-auto w-4/5'>
              <li onClick={handleNav} className='text-white flex justify-between border-b-[#7c7c7c] border-b-2 py-1'>About<i className='fas fa-caret-down'></i></li>
              <li onClick={handleNav} className='text-white flex justify-between border-b-[#7c7c7c] border-b-2 py-2'>Feature<i className='fas fa-caret-down'></i></li>
              <li onClick={handleNav} className='text-white flex justify-between border-b-[#7c7c7c] border-b-2 py-2'>Ultimate Team<i className='fas fa-caret-down'></i></li>
              <li onClick={handleNav} className='text-white flex justify-between border-b-[#7c7c7c] border-b-2 py-2'>Ultimate Team Hub<i className='fas fa-caret-down'></i></li>
              <li onClick={handleNav} className='text-white flex justify-between border-b-[#7c7c7c] border-b-2 py-2'>FC 24 Rating<i className='fas fa-caret-down'></i></li>
              <li onClick={handleNav} className='text-white flex justify-between border-b-[#7c7c7c] border-b-2 py-2'>News & Community<i className='fas fa-caret-down'></i></li>
          </ul>
      </div>
    </header>
  )
}

export default Header