import React, { useEffect, useState } from 'react'
import { useNews } from '../contexts/NewsContext.jsx'
import Announcements from '../components/Announcements.jsx'
import Search from '../components/Search.jsx'
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
        <NewsSection title='Articles' newsResponse={news.articles} />
        <NewsSection title='Blogs' newsResponse={news.blogs} />
        <NewsSection title='Reports' newsResponse={news.reports} />
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