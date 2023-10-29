import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNews } from '../contexts/NewsContext.jsx'
import Navbar from '../components/Navbar.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Announcements from '../components/Announcements.jsx'
import NewsList from '../components/NewsList.jsx'
import Footer from '../components/Footer.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'

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
      <aside className='border-r h-full pb-4'>
        <h2 className='text-xl mb-3 p-2 border-gray-300'>Sort</h2>
        <div className='mb-2'>
          <select className='p-2 ml-4 mb-4 rounded-lg border'>
            <option className='p-1'>Most Relevant</option>
            <option className='p-1'>Most Recent</option>
            <option className='p-1'>Most Popular</option>
          </select>
        </div>

        <h2 className='text-xl mb-3 p-2 border-gray-300'>Filter</h2>
        <details open className=''>
          <summary className=' p-3 hover:cursor-pointer'>News Site</summary>
          <ul className=''>
            {newsSites &&
              newsSites.map(n =>
                <li className='p-2 ps-6  text-slate-900 hover:cursor-pointer hover:bg-slate-200'>{n}</li>
              )
            }
          </ul>
        </details>

      </aside>
    )
  }

  return (
    <div className='bg-home flex-grow flex flex-col'>
      <div className=''>
        <Navbar />
      </div>
      <div className='flex-grow flex flex-col px-6 semitransparent'>
        <div className='page-width flex-grow rounded-lg flex flex-col'>
          <main className='flex-grow flex flex-col rounded-lg'>
            <div className='flex-grow lg:grid lg:grid-flow-col'>
              <div className='hidden lg:block w-[260px] pt-8 border-e border-slate-300'>
                <SideMenu />
              </div>
              <div className='flex-grow lg:col-span-9 px-12 py-8'>
                <Announcements />
                <SearchBar />
                {news ? <News /> : <Loading />}
              </div>
            </div>
          </main >

          <div className='border-t border-slate-300'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home