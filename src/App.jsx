import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NewsProvider } from './contexts/NewsContext'
import Hero from './pages/Hero'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Blogs from './pages/Blogs'
import Reports from './pages/Reports'
import SearchResults from './pages/SearchResults'
import Nav from './components/Nav'
import styles from './style.js'

const App = () => (
  <div className='bg-white w-full overflow-hidden'>
    <NewsProvider>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Nav />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
    </NewsProvider>
  </div>
)

export default App
