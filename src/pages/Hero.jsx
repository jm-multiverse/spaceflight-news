import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import {
  researchSatellite,
} from '../assets/icons'

export default function Hero() {
  return (
    <div className='bg-hero flex flex-col'>
      <div className='page'>
        <Navbar />
        <div className='flex-grow flex flex-col justify-center items-center p-10'>
          <div className='bg-white bold-drop-shadow py-12 px-4 sm:p-16 md:py-20 md:px-8  my-10 flex flex-col lg:flex-row justify-center items-center gap-8 xl:gap-16'>
            <div className='text-center max-w-xl'>
              <h1 className='mb-2 text-5xl xl:text-[54px] xl:whitespace-nowrap text-slate-900 font-thin'>
                Spaceflight News
              </h1>
              <h2 className='text-2xl text-slate-900 font-thin'>
                Your one-stop shop for the latest news in spaceflight
              </h2>
              <p className='py-4 sm:text-lg font-normal'>
                Our mission is to provide a news and information service which helps our readers to stay informed about the latest developments in spaceflight.
              </p>
            </div>
            <img
              src={researchSatellite}
              alt='Research satellite logo'
              className='lg:h-80 xl:h-80 mt-4' />
            <Link
              to='/home'
              className='mt-4 flex items-center justify-center'>
              <div className='text-black p-3 border-[1.5px] border-black text-xl flex items-center gap-2 transition-all duration-200 hover:bg-black hover:text-white hover:translate-x-2 lg:whitespace-nowrap'
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div >
    </div>
  )
}
