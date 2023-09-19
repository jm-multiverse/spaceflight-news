import React from 'react'
import heroImage from '../assets/The_SpaceX_Crew_Dragon_Endeavour_approaches_the_International_Space_Station_(iss065e002231).jpg'

export default function Hero() {
  return (
    <section className='hero-section'>
      <img src={heroImage} alt='hero' />
    </section>
  )
}
