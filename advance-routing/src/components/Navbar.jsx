import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-800'>
      <h1 className='text-white text-xl font-bold'>Hashim</h1>
      <div className='flex gap-4'>
        <Link to="/" className='text-white hover:text-gray-400'>Home</Link>
        <Link to="/about" className='text-white hover:text-gray-400'>About</Link>
        <Link to="/product" className='text-white hover:text-gray-400'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
