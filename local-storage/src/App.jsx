import React from 'react'

const App = () => {
  localStorage.setItem('name', 'John Doe');
  const name = localStorage.getItem('name');
  console.log(name); // Output: John Doe

  const users={
    name:'John Doe',
    age:30,
    city:'New York'
  }

  localStorage.setItem('user', JSON.stringify(users));
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user); // Output: { name: 'John Doe', age: 30, city: 'New York' }
  return (
    <div>
      
    </div>
  )
}

export default App
