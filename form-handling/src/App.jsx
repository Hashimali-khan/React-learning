import React from 'react'
import { useState } from 'react'

const App = () => {
  const submission = (e) => {
    e.preventDefault()
    console.log('form submitted by {title}')
    settitle("")
  }

  const [title, settitle] = useState("")

  return (
    <div>
      <form onSubmit={(e) => 
        {submission(e)}
        }>
           <input type="text"
           value={title} onChange={e=>{
            settitle(e.target.value)
           }} placeholder='enter your name' />
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default App
