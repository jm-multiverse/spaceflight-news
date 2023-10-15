import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='hero min-h-full min-w-full flex flex-col bg-constellation'>
      <Navbar />
      <div className='bg-mosaic bg-cover p-6 grow flex items-center justify-center h-full'>
        <div className='flex h-full'>
          <div className='content p-6 sm:py-10 bg-white grid lg:grid-cols-2 items-center m-auto justify-center gap-6 2xl:gap-0 shadow rounded-lg'>
            <div className='image-container p-2 md:p-0'>
              <div className='bg-satellite bg-no-repeat bg-contain bg-center h-full w-full min-w-[200px] min-h-[200px] sm:min-h-[300px] sm:min-w-[300px] max-w-fit max-h-fit m-auto animate-pulse-slow'></div>
            </div>
            <div className='text-4xl sm:text-5xl font-bold font-poppins flex flex-col leading-relaxed max-w-[570px]'>
              <h1>Elevating Space Announcements:&nbsp;</h1>
              <h2>Your Cosmic News Hub</h2>
              <p className='py-4 text-base sm:text-lg font-normal'>Our mission is to provide a news and information service which helps our readers to stay informed about the latest developments in spaceflight.</p>
              <Link
                to='/home'
                className='bg-black self-end text-white font-bold text-3xl h-14 w-60 sm:text-4xl sm:h-20 sm:w-96 mt-4 rounded-full flex items-center justify-center hover:translate-x-2 transition duration-300 ease-in-out'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
