import axios from 'axios';
import React from 'react'

const App = () => {


 const showResponse = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data= await response.json();
  console.log(data);
  const axiosResponse = await axios.get('https://jsonplaceholder.typicode.com/todos');
  console.log(axiosResponse.data);

}



  return (
    <div>
      <button onClick={()=>{
        showResponse();
      }}>Click me</button>
    </div>
  )
}

export default App
