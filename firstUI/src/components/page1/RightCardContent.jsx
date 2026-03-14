import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div>
         <div className='absolute top-0 bottom-0 left-0 w-full p-6 bg-linear-to-t from-black/80 to-transparent text-white flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-black text-2xl font-bold'>{props.id+1}</h2>
        <div className='flex flex-col gap-4'>
           <p className='leading-normal'>{props.info}</p>
           <div>
            <button className='bg-blue-600 text-white font-semibold px-8 py-3 rounded-full ' >{props.tag}</button>
            <button className='bg-blue-600 text-white font-semibold px-5 py-2 rounded-full '> <ArrowRight /></button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
