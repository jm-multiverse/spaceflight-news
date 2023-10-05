import React from 'react'
import { useNews } from '../contexts/NewsContext.jsx'
import NewsSection from './NewsSection.jsx'
import { useEffect, useState } from 'react'

export default function NewsScrollable({ title, schemaName }) {
  const { fetchSchema } = useNews()
  const [news, setNews] = useState(null)

  useEffect(() => {
    async function getNews() {
      const news = await fetchSchema(schemaName, { limit: 10 })
      setNews(news)
    }
    getNews()
  }, [])

  return (
    <section className='padding-x py-4 max-container'>
      {news && <NewsSection title={title} newsResponse={news} noBrowse />}
    </section>
  )
}
