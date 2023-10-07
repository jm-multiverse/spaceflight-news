import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NewsProvider } from './contexts/NewsContext'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Blogs from './pages/Blogs'
import Reports from './pages/Reports'
import SearchResults from './pages/SearchResults'

function App() {
  return (
    <>
      <NewsProvider>
        <Routes>
          <Route path='/login' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/search' element={<SearchResults />} />
        </Routes>
      </NewsProvider>
    </>
  )
}

export default App
