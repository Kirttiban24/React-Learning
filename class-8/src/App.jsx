import { useState } from 'react'

const App = () => {

  const [userName, setuserName] = useState('')
  const [Role, setRole] = useState('')
  const [ImageURL, setImageURL] = useState('')
  const [userDesc, setuserDesc] = useState('')

  const localData = JSON.parse(localStorage.getItem('all-users')) || []

  const [allUsers, setallUsers] = useState(localData)

  const submitHandler = (e)=>{
    e.preventDefault()
    
    const oldUsers = [...allUsers];

    oldUsers.push({userName, Role, userDesc, ImageURL})

    setallUsers(oldUsers)
    localStorage.setItem('all-users',JSON.stringify(oldUsers))

    setuserName('')
    setRole('')
    setImageURL('')
    setuserDesc('')
  }

  const deleteHandler = (idx) => {
    const copyUser = [...allUsers] 
    copyUser.splice(idx,1)   

    setallUsers(copyUser)
    localStorage.setItem('all-users',JSON.stringify(copyUser))

  }


  return (
    <div className='h-screen overflow-auto bg-black text-white'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='px-2 py-10 flex flex-wrap'>

          <input

          value={userName}
          onChange={(e)=>{
            setuserName(e.target.value)
          }}

          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
          type="text"  
          placeholder='Enter Name'/>

          <input 

          value={ImageURL}
          onChange={(e)=>{
            setImageURL(e.target.value)
          }}

          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
          type="text"  
          placeholder='Image URL'/>

          <input 

          value={Role}
          onChange={(e)=>{
            setRole(e.target.value)
          }}

          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
          type="text"  
          placeholder='Enter Role'/>

          <input 

          value={userDesc}
          onChange={(e)=>{
            setuserDesc(e.target.value)
          }}

          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
          type="text"  
          placeholder='Enter Description'/>

          <button className='px-5 py-2 text-xl active:scale-95 cursor-pointer font-semibold bg-emerald-600 rounded m-2 w-[97%] mt-5'>Create User</button>

        </form>
        <div className='px-4 py-10 gap-4 flex flex-wrap'>

          {allUsers.map((elem,idx)=>{
            return <div key={idx} className='lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl px-8 py-8 flex flex-col items-center text-center bg-white text-black'>
              <img className='h-24 w-24 object-cover object-center rounded-full' src={elem.ImageURL} alt="" />
              <h1 className='text-2xl mt-2 font-bold'>{elem.userName}</h1>
              <h5 className=' text-blue-500 text-lg font-semibold my-3'>{elem.Role}</h5>
              <p className='text-sm font-medium leading-tight '>{elem.userDesc}</p>
              <button onClick={() => {
                deleteHandler(idx)
              }} 
              
              className='px-4 py-2 rounded bg-red-600 text-s cursor-pointer active:scale-95 text-white font-semibold mt-3 '>Remove</button>
            </div>
          })}
        </div>
    </div>
  )
}

export default App
