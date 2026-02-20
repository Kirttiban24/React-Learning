import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {

  const data = useContext(ThemeDataContext)

  return (
    <div>
      <h1>Footer - {data}</h1>
    </div>
  )
}

export default Footer
