import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Articles from './sections/Articles'

function App() {

  return (
    <main className='app'>
      <Nav />
      <Articles />
    </main>
  )
}

export default App
