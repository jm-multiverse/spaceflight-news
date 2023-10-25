import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNews } from '../contexts/NewsContext.jsx'
import Navbar from '../components/Navbar.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Announcements from '../components/Announcements.jsx'
import NewsList from '../components/NewsList.jsx'
import Footer from '../components/Footer.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'
import styles from '../styles.js'

function Home() {
  const { fetchHomePageNews } = useNews()
  const [news, setNews] = useState(null)

  useEffect(() => {
    async function getNews() {
      const news = await fetchHomePageNews()
      setNews(news)
    }
    getNews()
  }, [])

  function SectionHeader({ title, href }) {
    return (
      <Link
        to={href}
        className='header-link py-6 flex w-fit items-baseline gap-4 group hover:translate-x-1 transition-all '
      >
        <h2 className='text-2xl md:text-3xl font-semibold'>
          {title}
        </h2>
        <span className='text-xl md:text-2xl font-normal text-transparent  transition-all duration-150 group-hover:text-slate-600 group-focus:text-slate-600'>Browse all</span>
      </Link>
    )
  }

  function News() {
    return (
      <div className='grid grid-cols-3 gap-6'>
        <section className='articles'>
          <SectionHeader title='Articles' href='/articles' />
          <NewsList newsResponse={news.articles} />
        </section>
        <section className='blogs'>
          <SectionHeader title='Blogs' href='/blogs' />
          <NewsList newsResponse={news.blogs} />
        </section>
        <section className='reports'>
          <SectionHeader title='Reports' href='/reports' />
          <NewsList newsResponse={news.reports} />
        </section>
      </div>
    )
  }

  function Loading() {
    return (
      <div className='flex flex-col pt-20 pb-10 justify-center items-center'>
        <h1 className='text-2xl font-semibold'>Getting News...</h1>
        <br />
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className='home bg-slate-50'>
      <Navbar />
      <main className={`${styles.pageWidth}`}>
        <SearchBar />
        <Announcements />
        {news ? <News /> : <Loading />}
      </main >
      <Footer />
    </div>
  )
}

export default Home