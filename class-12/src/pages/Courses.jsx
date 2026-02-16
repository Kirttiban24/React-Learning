import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        <div className='bg-red-700 flex flex-nowrap gap-20 text-2xl px-6'>
          <p>Sale is LIVE!!!</p>
          <p>Sale is LIVE!!!</p>
          <p>Sale is LIVE!!!</p>
          <p>Sale is LIVE!!!</p>
          <p>Sale is LIVE!!!</p>
          <p>Sale is LIVE!!!</p>
        </div>

        <Outlet />      
    </div>
  )
}

export default Courses
