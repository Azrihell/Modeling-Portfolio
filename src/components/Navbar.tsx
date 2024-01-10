import React from 'react'
import { Link } from 'react-router-dom'
// import './styles.css/navbar.css'

const Navbar = () => {
  return (
    <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'>
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
  )
}

export default Navbar