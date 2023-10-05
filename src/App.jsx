import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Home />} />
        <Route path='/blogs' element={<Home />} />
        <Route path='/reports' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/login' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
