import { Link } from 'react-router-dom'
import { blackSatelliteOutline } from '../assets/icons'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 w-full bg-inherit'>
      <nav className='flex justify-between items-center max-container'>
        <Link className='flex justify-between items-center group' href="/">
          <img
            className="w-12 h-12 sm:w-16 sm:h-16 group-hover:animate-ping transition-all"
            src={blackSatelliteOutline}
            alt="Logo"
          />
          <h1 className='sm:text-xl px-4'>Spaceflight News</h1>
        </Link>
        <ul className="flex-1 flex justify-end items-center gap-8 me-8 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.href} className='leading-normal text-lg text-slate-gray border-b-2 border-b-transparent hover:border-b-slate-600'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex text-lg leading-normal font-medium max-lg:hidden wide:mr-24'>
          <a href='/'>Subscribe</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav