import React from 'react'
import Announcements from '../components/Announcements'
import HomePageNews from '../components/HomePageNews'
import Search from '../components/Search'
import { NewsProvider } from '../contexts/NewsContext'

export default function Home() {
  return (
    <main className=''>
      <NewsProvider>
        <section className='padding-x py-4 max-container'>
          <Search />
        </section>
        <section className='padding-x py-4 max-container'>
          <Announcements />
        </section>
        <section className='padding-x py-4 max-container'>
          <HomePageNews />
        </section>
      </NewsProvider>
    </main>
  )
}
