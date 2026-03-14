import React from 'react'

import RightCardContent from './RightCardContent.jsx'

const Rightcard = (props ) => {
  return (
    <div className='h-full relative w-80 bg-amber-700 rounded-4xl overflow-hidden shrink-0'>
        <img  src={props.img} alt="imgperson" className='h-full w-full object-cover'/>
 
     <RightCardContent id={props.id} info={props.info} tag={props.tag}/>
      
    </div>
  )
}

export default Rightcard
