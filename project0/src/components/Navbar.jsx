import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="navbar">
      <div className="navbar-logo">
        Hashim
      </div>

      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="navbar-btn">
        <button>Login</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
