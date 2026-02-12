import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-blue-500 mb-10 font-semibold text-white'>
      <div className='flex gap-8'> 
        <NavLink 
        to='/'
        style={
          ({isActive}) => ({
            color: isActive ? 'red' : 'white'
          })
        }
        >
          Home
        </NavLink>
        <NavLink 
        to='/about'
        style={
          ({isActive}) => ({
            color: isActive ? 'red' : 'white'
          })
        }
        >
          About
        </NavLink>
        <NavLink 
        to='/courses'
        style={
          ({isActive}) => ({
            color: isActive ? 'red' : 'white'
          })
        }
        >
          Courses
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
