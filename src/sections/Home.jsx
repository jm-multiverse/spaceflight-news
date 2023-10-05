import React, { useEffect, useState } from 'react'
import { useNews } from '../contexts/NewsContext.jsx'
import Search from '../components/Search.jsx'
import Announcements from '../components/Announcements.jsx'
import NewsSection from '../components/NewsSection.jsx'

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

  function News() {
    return (
      <>
        <NewsSection href='/articles' title='Articles' newsResponse={news.articles} />
        <NewsSection href='/blogs' title='Blogs' newsResponse={news.blogs} />
        <NewsSection href='/reports' title='Reports' newsResponse={news.reports} />
      </>
    )
  }

  return (
    <section className='padding-x py-4 max-container'>
      <section className='py-4'>
        <Search />
      </section>
      <section className='py-4'>
        <Announcements />
      </section>
      {news && <News />}
    </section >
  )
}

export default Home