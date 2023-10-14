import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='hero min-h-full min-w-full flex flex-col bg-constellation'>
      <Navbar />
      <div className='content grow flex items-center justify-center h-full p-4'>
        <div className='bg-mosaic bg-no-repeat bg-cover p-10 flex h-full'>
          <div className='content p-14 bg-white grid lg:grid-cols-2 items-center m-auto justify-center'>
            <div className='bg-satellite bg-no-repeat bg-contain h-80 w-80 m-auto animate-pulse-slow'></div>
            <div className='text-5xl font-bold font-poppins flex flex-col leading-relaxed max-w-[570px]'>
              <h1>Elevating Space Announcements:&nbsp;</h1>
              <h2>Your Cosmic News Hub</h2>
              <p className='py-4 text-lg font-normal'>Our mission is to provide a news and information service which helps our readers to stay informed about the latest developments in spaceflight.</p>
              <Link
                to='/home'
                className='bg-black self-end text-white font-bold text-4xl h-20 w-96 mt-4 rounded-full flex items-center justify-center hover:translate-x-2 transition duration-300 ease-in-out'
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
