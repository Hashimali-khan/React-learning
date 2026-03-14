import React from 'react'
import Rightcard from './Rightcard'

const RightContent = (props) => {
  return (
    <div id="right" className=' w-2/3 flex flex-nowrap gap-10 p-6 overflow-x-auto rounded-4xl'>


      {props.users.map(function(user,idx){
        return <Rightcard key={idx} id={idx} img={user.img} info={user.info} tag={user.tag}/>     
      })}
      
    </div>
  )
}

export default RightContent
