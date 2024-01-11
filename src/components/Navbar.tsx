import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-screen'>
      <div className='h-full inline-flex flex-col border-r'>
        <div className='p-4 pb-2 flex items-center'>
          <img src='https://www.azcraftscode.com/assets/azLogo-18289bf9.png' className='w-32' alt='logo'></img>
          <div className='relative py-2 px-3 cursor-pointer'>
            <div className='p-4 m-5 bg-gray-700 hover:bg-gray-600 rounded'>
              <Link to="/">Home</Link>
            </div>
            <div className='p-4 m-5 bg-gray-700 hover:bg-gray-600 rounded '>
              <Link to="/About">About</Link>
            </div>
            <div className='p-4 m-5 bg-gray-700 hover:bg-gray-600 rounded'>
              <Link to="/Contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar