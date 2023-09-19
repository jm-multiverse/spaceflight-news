import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Featured from './sections/Featured'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app'>
      <Nav />
      <Featured />
    </main>
  )
}

export default App
