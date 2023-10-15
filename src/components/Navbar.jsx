import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

export default function Navbar() {
  return (
    <header className='text-primary p-4 px-6 bg-semi-transparent'>
      <nav className='flex justify-between items-center'>
        <Link className='group flex items-center gap-2' to="/">
          <div
            className="group-hover:animate-ping bg-satellite bg-no-repeat bg-center bg-contain w-10 h-10"
            alt="satellite icon"
          >
          </div>
          <h1 className=''>Spaceflight News</h1>
        </Link>
        <ul className="flex gap-12 max-lg:hidden">
          {/* Map through navigation links */}
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='bg-hamburger hidden max-lg:block bg-no-repeat bg-center bg-contain w-10 h-10' width={25} height={25} >
        </div>
      </nav>
    </header>
  )
}