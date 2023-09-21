import React from 'react'
import { useNews } from '../contexts/NewsContext'

export default function Articles() {
  const { articles } = useNews()
  console.log(articles)

  return (
    <section className='bg-inherit mt-12'>
      {articles.results && articles.results.map((article) => (
        <article key={article.id} className='bg-white border-white border-2 rounded-lg shadow-lg p-8 mb-8 hover:cursor-pointer hover:translate-x-1 hover:border-slate-800 transition  ease-linear'>
          <h2 className='text-xl font-medium mb-4'>{article.title}</h2>
          <p className='text-base font-normal mb-4'>{article.summary}</p>

        </article>
      ))}
    </section>
  )
}
