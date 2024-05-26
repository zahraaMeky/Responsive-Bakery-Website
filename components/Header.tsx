'use client';
import { useState } from 'react';
import { FaXmark,FaBars } from 'react-icons/fa6'; 
import { Link } from "react-scroll";
import Image from 'next/image';
import { navLinks } from '@/export';
const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const toggleMenu=()=>{
    setisMenuOpen(prev => !prev)
  }
  return (
    <nav className='bg-black flex justify-between items-center w-full gap-1 px-6 lg:px-16 py-3 sticky top-0 z-50'>
      <Image className="invert" width={90} height={90} alt="logo" src="/logo.png" />
      <ul className='lg:flex justify-center items-center gap-10 hidden'>
      {navLinks.map((link) => (
            <li key={link.link}>
              <Link
                to={link.path}
                className="cursor-pointer text-white uppercase font-semibold  p-3 rounded-lg hover:text-white hover:bg-orange-600 transition ease-in-out duration-300"
              >
                {link.link}
              </Link>
            </li>
          ))}
      </ul>
      <button className='bg-orange-600 text-white px-10 py-3 font-bold rounded-full transform transition-transform hover:scale-105 duration-300 '>ORDER NOW</button>
      {/* mobile Nav */}
      <div className='flex justify-center items-center lg:hidden mt-4' onClick={toggleMenu}>
        <div>
          {
            isMenuOpen?<FaXmark className='text-white text-3xl cursor-pointer'/>:
            <FaBars className='text-white text-3xl cursor-pointer'/>
          }
        </div>
      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full bg-black h-fit p-4 absolute top-[80px] left-0`} >
        <ul className='flex flex-col  justify-center items-center gap-2 w-full'>
            {navLinks.map((link) => (
                  <li key={link.link}>
                    <Link
                      to={link.path}
                      className="cursor-pointer text-white uppercase font-semibold w-full p-3 rounded-lg hover:text-white hover:bg-orange-600 transition ease-in-out duration-300"
                    >
                      {link.link}
                    </Link>
                  </li>
                ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
