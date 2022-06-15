import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='menu-container'>
      <div className='nav-div'>
        <h2 className='logo'>EnergySystems</h2>
        <div className='nav-items'>
          <p className='nav-item'>About</p>
          <p className='nav-item'>Products</p>
          <p className='nav-item'>Contact</p>
        </div>

      </div>
    </nav>
  )
}

export default Navbar