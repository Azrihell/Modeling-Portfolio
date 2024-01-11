import { useState } from 'react'
import { Link } from 'react-router-dom'
import azlogo from '../assets/azlogo.png'


const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <div className='h-screen'>
      <div className='flex'>
        <div className='p-4 pb-2'>
          <img src={azlogo} className='w-96' alt='logo'></img>
          <div className='fixed py-2 px-3 cursor-pointer'>
            <div className='p-4 m-5 bg-gray-700 hover:bg-gray-600 active:bg-pink-200 rounded'>
              <Link to="/">Home</Link>
            </div>
            <div className='p-4 m-5 bg-gray-700 hover:bg-gray-600 active:bg-pink-200 rounded '>
              <Link to="/About">About</Link>
            </div>
            <div className='p-4 m-5 bg-gray-700 hover:bg-gray-600 active:bg-pink-200 rounded'>
              <Link to="/Contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar