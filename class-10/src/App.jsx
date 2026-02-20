import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [allPokemon, setallPokemon] = useState([])

  const getData = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')

    setallPokemon(response.data.results)
  } 
  useEffect(function(){
    getData()
  },[])

  return (
    <div>
      <button onClick={getData}>click</button>
      {allPokemon.map(function(elem,idx){

        return <h1 key={idx}>{elem.name}</h1>
      })}
    </div>
  )
}

export default App
