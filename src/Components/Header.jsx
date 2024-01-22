import React from 'react'
import './Header.css'
import { NavLink,Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          E-CommerS
        </div>
        <nav className="navbar">
           <Link to="/">
           Home
          </Link>
           <Link to="/services">
           Services
          </Link>
           <Link to="/about">
           About
          </Link>
           <Link to="/contact">
           Contact
          </Link>
        </nav>
      </header> 
    </div>
  )
}

export default Header