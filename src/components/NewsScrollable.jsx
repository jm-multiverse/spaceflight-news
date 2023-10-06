import React from 'react'
import { useNews } from '../contexts/NewsContext.jsx'
import NewsList from './NewsList.jsx'
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

  async function loadMore() {
    const nextNews = await fetch(news.next)
    setNews([...news, ...nextNews])
    setPage(nextPage)
  }

  return (
    <section className='py-4 max-container'>
      {news && <NewsList title={title} newsResponse={news} noBrowse />}
      {console.log(news)}
      <button onClick={loadMore}>Load More</button>
    </section>
  )
}
