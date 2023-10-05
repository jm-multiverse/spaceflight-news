import React from 'react'
import Home from '../sections/Home'
import Nav from '../components/Nav'
import { NewsProvider } from '../contexts/NewsContext'
import { Routes, Route } from 'react-router-dom'
import Articles from '../sections/Articles'
import Blogs from '../sections/Blogs'
import Reports from '../sections/Reports'

export default function Main() {
  return (<>
    <Nav />
    <main className=''>
      <NewsProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/reports' element={<Reports />} />
        </Routes>
      </NewsProvider>
    </main>
  </>
  )
}
