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
  const { fetchHomePageNews, fetchNewsSites } = useNews()
  const [news, setNews] = useState(null)
  const [newsSites, setNewsSites] = useState(null)

  useEffect(() => {
    async function getNews() {
      const news = await fetchHomePageNews()
      const newsSites = await fetchNewsSites()
      setNews(news)
      setNewsSites(newsSites.news_sites)
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
      <div className=''>
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
      <div className='flex-grow flex flex-col pt-20 pb-10 justify-center items-center'>
        <h1 className='text-2xl font-thin'>Fetching  News...</h1>
        <br />
        <LoadingSpinner />
      </div>
    )
  }

  function SideMenu() {
    return (
      <aside className='whitespace-nowrap mr-4 border-r h-full pb-4'>
        <h2 className='text-xl p-2 mb-3 font-semibold'>Filter by</h2>
        <details open className=''>
          <summary className='bg-slate-100 p-2'>News Site</summary>
          <ul className='indent-8'>
            {newsSites &&
              newsSites.map(n =>
                <li className='leading-7 text-slate-900 hover:cursor-pointer hover:text-slate-600'>{n}</li>
              )
            }
          </ul>
        </details>

      </aside>
    )
  }

  return (
    <div className='bg-home flex flex-col h-full'>
      <Navbar />
      <div className='page-width flex-grow flex flex-col semitransparent-light'>
        <main className='flex-grow flex flex-col pt-4 rounded-lg'>
          <div className='flex-grow grid grid-cols-12'>
            <div className='col-span-2 ps-3'>
              <SideMenu />
            </div>
            <div className='flex-grow col-span-10 px-4'>
              <Announcements />
              <SearchBar />
              {news ? <News /> : <Loading />}
            </div>
          </div>
        </main >
        <div className='border-t'>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home