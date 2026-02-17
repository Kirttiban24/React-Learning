import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Footer = () => {

  const user = useContext(UserDataContext)

  return (
    <div className='h-20 w-full absolute bottom-0 bg-blue-500 px-6 py-4'>
      <h1>This is Footer</h1>
      {user}
    </div>
  )
}

export default Footer
