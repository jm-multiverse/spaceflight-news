import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/blogs", label: "Blogs" },
  { href: "/reports", label: "Reports" },
  { href: "/login", label: "Log In" },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    // Implement your search functionality here
    // For example, you can make an API request to search for results based on 'searchQuery'
    // Update 'searchResults' with the search results
    // setSearchResults([...results]);
  };

  return (
    <nav className="p-4 border-b b semitransparent">
      <div className="flex justify-between items-center max-w-[2000px] m-auto whitespace-nowrap">

        {/* Logo */}
        <Link className='group flex items-center gap-4' to="/">
          <div
            className="group-hover:scale-125 transition-all duration-150 ease-in-out bg-satellite bg-no-repeat bg-center bg-contain w-10 h-10"
            alt="satellite icon"
          >
          </div>
          <h1 className='text-lg sm:text-xl font-thin'>Spaceflight News</h1>
        </Link>

        {/* Search */}
        <div className='justify-center flex-grow px-9 xl:px-16 max-w-[600px] lg:max-w-[800px] hidden lg:flex '>
          <input type="text" placeholder="Search" className="grow rounded-l-md m-h-full bg-slate-100 text-slate-900 px-4 focus:ring-0 focus:outline-none focus:border-slate-200" />
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


        {/* Navigation Links */}
        <ul className="flex gap-8 xl:gap-12 max-md:hidden items-center">
          {navLinks.map((item) => (
            <li key={item.label} >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
          <div className='flex gap-6 xl:gap-8'>
            <Link to='/login' className='font-semibold'>Sign Up</Link>
          </div>
        </ul>

        <div className='flex align-middle justify-center gap-6'>
          {/* Mobile Search Icon */}
          <button className="lg:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
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

          {/* Hamburger Menu */}
          <button className="md:hidden" onClick={toggleNav}>
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
            >
              {isOpen ? (
                <line x1="3" y1="12" x2="21" y2="12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-full h-full items-center justify-center bg-gray-800 bg-opacity-80">
          <div className="bg-white p-4 rounded-md">
            {/* Search input and search functionality go here */}
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full rounded-md bg-slate-100 text-slate-900 px-4 focus:ring-0 focus:outline-none focus:border-slate-200"
            />
            <button
              onClick={() => {
                // Handle search functionality here
                // You can update the search results or take other actions
                // Then close the search bar by setting isSearchOpen to false
                setIsSearchOpen(false);
              }}
              className="w-1/3 max-w-[100px] h-10 bg-slate-100 rounded-r-md hover:bg-slate-200 min-w-[50px]"
            >
              Search
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navigation Links */}
      {isOpen && (
        <ul className="mt-4">
          {navLinks.map((item) => (
            <li key={item.label} className="mb-2">
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}

    </nav>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='border-b whitespace-nowrap'>
      <nav className='flex justify-between items-center gap-3 max-w-screen-2xl py-3 px-5'>
        <Link className='group flex items-center gap-4' to="/">
          <div
            className="group-hover:scale-125 transition-all duration-150 ease-in-out bg-satellite bg-no-repeat bg-center bg-contain w-10 h-10"
            alt="satellite icon"
          >
          </div>
          <h1 className='text-xl font-thin'>Spaceflight News</h1>
        </Link>
        <div className='flex justify-center'>
          <input type="text" placeholder="Search" className="grow rounded-l-md bg-slate-100 text-slate-900 px-4 focus:ring-0 focus:outline-none focus:border-slate-200" />
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

        <ul className="flex gap-12 max-lg:hidden items-center">
          {/* Navigation Links */}
          {navLinks.map((item) => (
            <li key={item.label} >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
          <div className='flex gap-6'>
            <Link to='/login' className='font-semibold'>Sign Up</Link>
            <Link to='/login' className='font-semibold'>Log In</Link>
          </div>
        </ul>
        <div className='bg-hamburger hidden max-lg:block bg-no-repeat bg-center bg-contain w-10 h-10' width={25} height={25} >
        </div>
      </nav>
    </header>
  )
}