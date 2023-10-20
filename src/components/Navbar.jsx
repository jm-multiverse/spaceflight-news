import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/blogs", label: "Blogs" },
  { href: "/reports", label: "Reports" },
];

export default function Navbar() {
  return (
    <header className='px-6 py-5 border-b whitespace-nowrap'>
      <nav className='flex justify-between items-center gap-3 max-w-screen-2xl'>
        <Link className='group flex items-center gap-4' to="/">
          <div
            className="group-hover:animate-ping bg-satellite bg-no-repeat bg-center bg-contain w-10 h-10"
            alt="satellite icon"
          >
          </div>
          <h1 className='text-xl font-thin'>Spaceflight News</h1>
        </Link>
        <div className='grow h-10 flex justify-center px-8'>
          <input type="text" placeholder="Search" className="grow rounded-l-md bg-slate-100 text-slate-900 px-4" />
          <button className="w-1/3 max-w-[100px] h-10 bg-slate-100 rounded-r-md hover:bg-slate-200 min-w-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-900 h-5 w-5 m-auto"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        <ul className="flex gap-12 max-lg:hidden">
          {/* Navigation Links */}
          {navLinks.map((item) => (
            <li key={item.label} >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
          <div className='flex gap-2 font-semibold'>
            <Link to='/login'>Log In</Link>
            <span className='font-normal'>/</span>
            <Link to='/signup'>Sign Up</Link>
          </div>
        </ul>
        <div className='bg-hamburger hidden max-lg:block bg-no-repeat bg-center bg-contain w-10 h-10' width={25} height={25} >
        </div>
      </nav>
    </header>
  )
}