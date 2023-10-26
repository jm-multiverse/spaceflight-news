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
      // setNews(news)
      // setNewsSites(newsSites.news_sites)
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
    console.log(newsSites)
    return (
      <aside className='whitespace-nowrap'>
        <h2 className='text-2xl mb-3'>Filter</h2>
        <details open className='transition-all'>
          <summary className='text-xl mb-2'>News Site</summary>
          <ul className='indent-2'>
            {newsSites &&
              newsSites.map(n =>
                <li className='text-slate-900 hover:cursor-pointer hover:text-slate-600'>{n}</li>
              )
            }
          </ul>
        </details>

      </aside>
    )
  }

  return (
    <div className='bg-home flex flex-col min-h-screen'>
      <Navbar />
      <div className='page-width p-8 flex-grow flex flex-col semitransparent rounded-lg'>
        <main className='flex-grow flex flex-col'>
          <div className='flex-grow grid grid-cols-2'>
            <div className='p-4 pr-6 h-fit rounded-md'>
              <SideMenu />
            </div>
            <div className='flex-grow'>
              <Announcements />
              <SearchBar />
              {news ? <News /> : <Loading />}
            </div>
          </div>
        </main >
        <div className='semitransparent'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home