import React from 'react'

import HeroText from './HeroText';
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className=' w-1/3 flex flex-col justify-between p-6'>
        <HeroText/>
        <div>
       <ArrowUpRight size={110} />
        </div>

  
    </div>

  )
}

export default LeftContent
