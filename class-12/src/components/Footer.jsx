import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div>
        <div className='flex items-center text-white text-2xl absolute justify-between p-10 bg-gray-700 w-[100vw] bottom-0'>
            <h3 className=''>Footer</h3>
            <button
             onClick={() => {
                navigate('/courses')
            }}
            className='px-2 py-4 cursor-pointer active:scale-95 rounded-md text-xl bg-green-600'>
                Explore Courses
            </button>
        </div>
    </div>
  )
}

export default Footer
