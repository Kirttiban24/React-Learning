import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar-logo">
            <h1>Horizon Courts</h1>
        </div>

        <ul className='navbar-menu'>
            <li>About Us</li>
            <li>Services</li>
            <li>Coaches</li>
            <li>Events</li>
            <li>Contacts</li>
        </ul>

        <button className="book-btn">
            Book now <span className="arrow">↗</span>
        </button>

    </nav>
  )
}

export default Navbar
