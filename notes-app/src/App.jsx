import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()
    const copyNote = [...notes]
    copyNote.push({ title, details })
    setNotes(copyNote)  
    setTitle("")
    setDetails("")
  }



  return (
    <div className='bg-black text-white w-full min-h-screen p-4'>
       <h1 className='text-2xl font-bold p-4 mb-4'>Add Note</h1>
      <div className='w-full  '>

        <form className="flex flex-col p-10 gap-4 w-full max-w-xl mx-auto mt-10" onSubmit={submitHandler}>

            <input className=' text-white border border-white/40 p-4 gap-4 font-medium ' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter title'
             />

            <textarea className=' text-white border border-white/40 p-4 h-32 gap-4 font-medium' type="text" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="write details"></textarea>

            <input className='bg-white text-black hover:bg-gray-200 active:bg-gray-300 font-bold py-2 px-4 border border-blue-700 rounded ' type="submit" value="Add Note" />

        </form> 

      </div>

      <div>
        <h1 className='text-2xl font-bold p-4 mb-4'>Your Notes</h1>
        <div className="w-full grid gap-4 px-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>

          {notes.map((note, index) => (
            
             <div
  key={index}
  className="flex flex-col justify-between items-start relative w-full max-w-sm min-h-[220px] bg-cover rounded-xl text-black pt-9 pb-4 px-4"
  style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')" }}
>
              <div>
                <h3 className='p-4leading-tight text-lg font-bold'>{note.title}</h3>
                <p className="p-4 mt-2 leading-tight text-xs font-semibold text-gray-600 line-clamp-4 break-words">
                  {note.details}
                </p>
              </div>
              <button onClick={() => {
                deleteNote(index)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>
          ))}

        </div> 
      </div>
    </div>
  )
}

export default App
