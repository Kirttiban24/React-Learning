import React from 'react'

const Card = () => {
  return (
    <div className='w-[23vw] rounded-xl px-8 py-8 flex flex-col items-center text-center bg-white text-black'>
        <img className='h-24 w-24 rounded-full' src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className='text-2xl mt-2 font-bold'>Kirttiban</h1>
        <h5 className=' text-blue-500 text-lg font-semibold my-3'>Developer</h5>
        <p className='text-sm font-medium leading-tight '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, doloribus.</p>
        <button className='px-4 py-2 rounded bg-red-600 text-s cursor-pointer active:scale-95 text-white font-semibold mt-3 '>Remove</button>
    </div>
  )
}

export default Card
