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
  const deleteNote = (index) => {
    const copyNote = [...notes]
    copyNote.splice(index, 1)
    setNotes(copyNote)
  }



  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Add Note</h1>
        <div className='w-full  '>

          <form
            className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-sm"
            onSubmit={submitHandler}
          >
            <label className="block">
              <span className="text-sm font-medium text-white/80">Title</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="mt-2 w-full rounded-lg border border-white/30 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-white/80">Details</span>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Write details"
                className="mt-2 h-32 w-full resize-none rounded-lg border border-white/30 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-white px-4 py-3 text-black font-bold shadow-sm transition hover:bg-gray-200 active:scale-[0.98]"
            >
              Add Note
            </button>
          </form> 

        </div>

        <div>
          <h1 className='text-2xl font-bold p-4 mb-4'>Recent  Notes</h1>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
          >
            {notes.map((note, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-start relative w-full max-w-sm min-h-[220px] rounded-xl bg-cover bg-center px-4 py-6 shadow-lg hover:shadow-xl transition"
                style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')" }}
              >
                <div>
                  <h3 className="text-black text-lg font-bold leading-tight">{note.title}</h3>
                  <p className="mt-2 leading-tight text-s font-semibold text-gray-600 line-clamp-4 break-words">
                    {note.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(index)
                  }}
                  className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
              </div>
            ))}
          </div> 
        </div> 
      </div>
    </div>
  )
}

export default App
