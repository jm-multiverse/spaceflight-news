import React from 'react'
import NewsList from '../components/NewsList'
import Nav from '../components/Nav'
import SearchBar from './SearchBar'
import { useEffect, useState } from 'react'
import { useNews } from '../contexts/NewsContext'

export default function NewsScrollable({ title, schema }) {
  const { fetchSchema } = useNews()
  const [news, setNews] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    async function getNews() {
      const news = await fetchSchema(schema, { limit: 10, offset: 0 })
      console.log(news)
      setNews(news)
    }
    getNews()
  }, [])

  function LoadMoreButton() {
    const buttonClassNames = 'py-1 px-3 text-lg border border-radius rounded border-gray-400 hover:bg-gray-100 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-opacity-50 focus:ring-offset-opacity-50 focus:border-gray-400 focus:border-opacity-50 hover:shadow-md'

    async function handleOnClick() {
      setPageNumber(pageNumber + 1)
      const nextNews = await fetchSchema(schema, { limit: 10, offset: pageNumber * 10 })
      const newNews = {
        ...news,
        results: [...news.results, ...nextNews.results]
      }
      setNews(newNews)
    }

    return (<>
      {news.next ? (
        <div className='flex justify-center'>
          <button className={buttonClassNames} onClick={handleOnClick}>Load More</button>
        </div>
      ) : (
        <span className='text-center block text-gray-400'>End of results.</span>
      )
      }

    </>
    )
  }

  return (<>
    <Nav />
    <main className='padding-x py-4 max-container'>
      <section className='py-4'>
        <SearchBar />
      </section>
      <h1 className='py-4 text-2xl md:text-3xl font-semibold'>
        {title}
      </h1>
      <section className='py-4 max-container'>
        {news &&
          <>
            <NewsList newsResponse={news} />
            <LoadMoreButton />
          </>}
      </section>
    </main>
  </>
  )
}
