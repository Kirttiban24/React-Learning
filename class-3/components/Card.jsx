import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white border-2 border-red-500 rounded m-2 h-20 w-40 px-5 py-3'>
        <h1 className='text-2xl text-black font-semibold'>{props.user}</h1>
    </div> 
  )
}

export default Card
