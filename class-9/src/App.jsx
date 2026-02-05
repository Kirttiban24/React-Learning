import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './components/Card'
import { useEffect } from 'react'

const App = () => {

  const [allUsers, setallUsers] = useState([])

  async function getData(){
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    
    setallUsers(response.data)
  }

  useEffect(function(){
    getData()
  },[])

  return (
    <div>

      <div className='all-cards'>
        {allUsers.map((elem,idx) => {
          return <div key={idx}>
            <Card elem={elem}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default App