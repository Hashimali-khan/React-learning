import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("form submitted")

  }



  return (
    <div className='bg-black text-white w-full h-full'>
       <h1 className='text-2xl font-bold p-4 mb-4'>Add Note</h1>
      <div className='w-full  '>
        <form className="flex flex-col p-10 gap-4 w-full max-w-xl mx-auto mt-10">

            <input className=' text-white border border-white/40 p-4 gap-4 font-medium ' type="text" placeholder='Enter title'
             />

            <textarea className=' text-white border border-white/40 p-4 h-32 gap-4 font-medium' type="text" placeholder="write details"></textarea>

            <button onClick={(e)=>{
              submitHandler(e)
            }} className='bg-white text-black hover:bg-gray-200 active:bg-gray-300 font-bold py-2 px-4 border border-blue-700 rounded '>Add Note</button>
        </form> 

      </div>

      <div>
        <h1 className='text-2xl font-bold p-4 mb-4'>Your Notes</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          <div className="flex flex-col p-10 gap-4 border border-white rounded">
            <h2 className='text-xl font-bold'>Note Title</h2>
            <p className='text-white'>Note details go here. This is a sample note.</p>
          </div>

           <div className="flex flex-col p-10 gap-4 border border-white rounded">
            <h2 className='text-xl font-bold'>Note Title</h2>
            <p className='text-white'>Note details go here. This is a sample note.</p>
          </div>

           <div className="flex flex-col p-10 gap-4 border border-white rounded">
            <h2 className='text-xl font-bold'>Note Title</h2>
            <p className='text-white'>Note details go here. This is a sample note.</p>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default App
