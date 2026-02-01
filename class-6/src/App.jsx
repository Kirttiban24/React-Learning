import { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [allUsers, setallUsers] = useState([])

  const submitHandler = (e)=> {
    e.preventDefault()
    
    setallUsers([...allUsers,{name,email}])
    

    setName('')
    setEmail('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter name'
        value={name}
        required 
        onChange={(e)=> {
          setName(e.target.value);
        }}/>

        <input 
        type="text" 
        placeholder='Enter email'
        value={email}
        required 
        onChange={(e)=> {
          setEmail(e.target.value);
        }}/>

        <button>Submit</button>
      </form>

      {allUsers.map((elem,idx) => {
        return <div key={idx}>
          <h4>{elem.name}</h4>
          <h4>{elem.email}</h4>
        </div>
      })}
    </div>
  )
}

export default App
