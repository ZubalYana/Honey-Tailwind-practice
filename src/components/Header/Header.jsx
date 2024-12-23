import React from 'react'
import logo from '/logo.svg'

export default function Header() {
  return (
      <header className='w-full flex items-center justify-between px-12 py-8'>
        <img src={logo} alt="honey" />
        <ul className='w-[415px] flex justify-between items-center'>
          <li className='font-bold cursor-pointer'>Home</li>
          <li className='font-light cursor-pointer'>About</li>
          <li className='font-light cursor-pointer'>Our Product</li>
          <li className='font-light cursor-pointer'>Contact</li>
        </ul>
      </header>
  )
}
