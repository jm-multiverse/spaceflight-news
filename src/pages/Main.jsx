import React from 'react'
import HomePageNews from '../sections/HomePageNews'
import Nav from '../components/Nav'
import { NewsProvider } from '../contexts/NewsContext'
import { Routes, Route } from 'react-router-dom'
import NewsScrollable from '../components/NewsScrollable'

export default function Main() {
  return (<>
    <Nav />
    <main className=''>
      <NewsProvider>
        <Routes>
          <Route path='/' element={<HomePageNews />} />
          <Route path='/articles' element={<NewsScrollable schemaName='articles' title='Articles' />} />
        </Routes>
      </NewsProvider>
    </main>
  </>
  )
}
