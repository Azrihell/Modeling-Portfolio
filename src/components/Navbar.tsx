import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-full flex flex-col border-r shadow-sm'>
      <div className='p-4 pb-2 flex justify-between items-center'>
        <img src='' className='w-32' alt='logo'></img>
        <div className='Home'>
          <Link to="/">Home</Link>
        </div>
        <div className='About'>
          <Link to="/About">About</Link>
        </div>
        <div className='Contact'>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar