import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNews } from '../contexts/NewsContext.jsx'
import Nav from '../components/Nav.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Announcements from '../components/Announcements.jsx'
import NewsList from '../components/NewsList.jsx'

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
        className='flex w-fit items-baseline gap-6 py-3 my-4 group hover:translate-x-1 transition-all '
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
      <>
        <section>
          <SectionHeader title='Articles' href='/articles' />
          <NewsList newsResponse={news.articles} />
        </section>
        <section>
          <SectionHeader title='Blogs' href='/blogs' />
          <NewsList newsResponse={news.blogs} />
        </section>
        <section>
          <SectionHeader title='Reports' href='/reports' />
          <NewsList newsResponse={news.reports} />
        </section>
      </>
    )
  }

  return (
    <>
      <Nav />
      <main className='padding-x py-4 max-container'>
        <section className='py-4'>
          <SearchBar />
        </section>
        <section className='py-4'>
          <Announcements />
        </section>
        {news && <News />}
      </main >
    </>
  )
}

export default Home