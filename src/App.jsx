import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Articles from './sections/Articles'
import Hero from './sections/Hero'

function App() {

  return (
    <main className='app'>
      <Nav />
      <Hero />
      <Articles />
    </main>
  )
}

export default App
