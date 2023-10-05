import React, { useEffect, useState } from 'react'
import { useNews } from '../contexts/NewsContext.jsx'
import NewsSection from './NewsSection.jsx'

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
        <NewsSection title='Articles' newsResponse={news.articles} href='/articles' />
        <NewsSection title='Blogs' newsResponse={news.blogs} href='/blogs' />
        <NewsSection title='Reports' newsResponse={news.reports} href='/reports' />
      </>
    )
  }

  return (
    <>
      {news && <News />}
    </ >
  )
}

export default Home