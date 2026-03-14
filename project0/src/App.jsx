import React from 'react'
import Card from './components/card.jsx';
import Navbar from './components/Navbar.jsx';


const App = () => {
  return (
    <>
    <Navbar/>
    <div className='parent'>
    <Card name="hashim" desc="hi my name is hashim" />
    <Card name="ali" desc="hi my name is hashim" />
    <Card name="khan" desc="hi my name is hashim" />
    <Card name="tanoli" desc="hi my name is hashim" />
   
    </div>
  
    </>
  )
}


export default App
