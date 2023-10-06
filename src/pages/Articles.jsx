import React from 'react'
import Nav from '../components/Nav'
import NewsList from '../components/NewsList'
import Search from '../components/Search'
import { useEffect, useState } from 'react'
import { useNews } from '../contexts/NewsContext'

export default function Articles() {
  const { fetchSchema } = useNews()
  const [news, setNews] = useState(null)

  useEffect(() => {
    async function getNews() {
      const news = await fetchSchema('articles', { limit: 10 })
      console.log(news)
      setNews(news)
    }
    getNews()
  }, [])

  function PageControls() {
    const nullClassNames = 'py-1 px-3 border text-lg text-gray-400 cursor-not-allowed focus:outline-none border-gray-400 rounded '
    const clickableClassNames = 'py-1 px-3 text-lg border border-radius rounded border-gray-400 hover:bg-gray-100 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-opacity-50 focus:ring-offset-opacity-50 focus:border-gray-400 focus:border-opacity-50 hover:shadow-md'

    const previousClassNames = news && news.previous ? clickableClassNames : nullClassNames
    const nextClassNames = news && news.next ? clickableClassNames : nullClassNames

    return (
      <div className='flex justify-end gap-3 p-2'>
        <span className='text-lg text-gray-400 '>
          {news && news.count.toString()} results
        </span>
        <button className={previousClassNames}>Previous</button>
        <button className={nextClassNames}>Next</button>
      </div>
    )
  }

  return (<>
    <Nav />
    <main className='padding-x py-4 max-container'>
      <section className='pb-4'>
        <Search />
      </section>
      <h1 className='py-4 text-2xl md:text-3xl font-semibold'>
        Articles
      </h1>
      <section className='py-4 max-container'>
        <PageControls />
        {news && <NewsList newsResponse={news} />}
        <PageControls />
      </section>
    </main>
  </>
  )
}
