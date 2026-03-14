import React from 'react'
import { useState } from 'react';

const App = () => {

  

const [a, seta] = useState(10);
let change=()=>{
  seta(30);
  console.log(a);
}

  return (
    <div>
      <h1>hi value of a is {a}</h1>
      <button onClick={change}>click me</button>
      
    </div>
  )
}

export default App
