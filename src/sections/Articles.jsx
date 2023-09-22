import React from 'react'
import { useNews } from '../contexts/NewsContext'

export default function Articles() {
  const { articles } = useNews()
  console.log(articles)

  return (
    <section className='bg-inherit rounded'>
      <a className='flex justify-start items-center gap-2 mt-12 mb-8' href="/">
        <h2 className='text-3xl font-semibold'>Articles</h2>
      </a>
      <div className='mb-8'>
        {articles.results && articles.results.map((article) => (
          <article key={article.id} className='p-8 mb-8 bg-white border-white border-2 rounded-lg shadow-lg hover:cursor-pointer hover:translate-x-1 hover:border-slate-800 transition  ease-linear'>
            <h2 className='text-2xl font-medium mb-4'>{article.title}</h2>
            <p className='text-lg font-normal mb-4'>{article.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
