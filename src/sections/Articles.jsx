import React from 'react'
import { useNews } from '../contexts/NewsContext'

export default function Articles() {
  const { articles } = useNews()
  console.log(articles.results)

  function ArticleCards() {
    return (
      articles.results.map((article) => {
        const date = new Date(article.published_at)
        return (
          <article key={article.id}
            className='p-8 mb-8 bg-white border-white border-2 rounded-lg shadow-lg hover:cursor-pointer hover:translate-x-1 hover:border-slate-800 transition ease-linear'
          >
            <a href={article.url} target='_blank'>
              <h2 className='text-2xl font-medium mb-4'>{article.title}</h2>
              <p className='text-lg font-normal mb-4'>{article.summary}</p>
              <div className=''>
                <p className='text-sm font-normal text-slate-600'>{date.toLocaleDateString()}</p>
              </div>
            </a>
          </article>
        )
      })
    )
  }

  return (
    <section className='bg-inherit rounded'>
      <a className='flex justify-start items-center gap-2 mt-10 mb-8' href="/">
        <h2 className='text-3xl font-semibold'>Articles</h2>
      </a>
      <div className='mb-8'>
        {articles.results && <ArticleCards />}
      </div>
    </section>
  )
}
