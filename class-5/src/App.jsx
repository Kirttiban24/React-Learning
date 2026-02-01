import React from 'react'
import { useState } from 'react';

const App = () => {

  // const [num, setNum] = useState(0)

    const [marks, setMarks ] = useState([60,55,98,69,87])

    function graceStudent(){
      const newMarks = marks.map(function(elem){

        if(elem > 95){
          return elem
        } else {
          return elem + 5
        }
      })

      setMarks(newMarks)
      
    }

  return (
    <div>
      {/* Example - Logic-2 */}

      {marks.map(function(elem,idx){

        return <h1 key={idx}>Student {idx+1} = {elem} ({elem>33?'PASS':"FAIL"})</h1>
        
      })}

      <button onClick={graceStudent}>Give me the Grace</button>



      {/* Example - Logic-1 */}

      {/* <h1>{num}</h1>
      <button onClick={() => {
        setNum(num + 1)
      }}>Increase
      </button>

      <button onClick={() => {
        setNum(num - 1)
      }}>Decrease
      </button>

      <button onClick={() => {
        setNum(num + 5)
      }}>Jump by 5
      </button> */}
    </div>
  )
}

export default App
