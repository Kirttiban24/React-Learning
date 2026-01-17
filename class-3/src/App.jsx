import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const App = () => {
   
  const users = ['0','1','2','3']

  return (
    <div className='p-3 h-screen bg-black'>
      {users.map(function(elem){
       return <Card user={elem}/>  
      })}
      
    </div>
  )
}

export default App
