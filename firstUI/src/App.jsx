import { Section } from 'lucide-react'
import React from 'react'
import Section1 from './components/page1/Section1'
import Section2 from './components/page2/Section2'
import Section3 from './components/page3/Section3'

const users = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Perferendis quis neque quisquam sapiente tempore.',
      tag:'unsatisfied'
  },

  {
    img: 'https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Perferendis quis neque quisquam sapiente tempore.',
      tag:'satisfied'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Perferendis quis neque quisquam sapiente tempore.',
      tag:'satisfied'

  }
]

const App = () => {
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default App
