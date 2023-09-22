import React from 'react'
import { useNews } from '../contexts/NewsContext'

export default function Articles(props) {
  const { articles } = useNews()
  console.log(articles)

  return (
    <section className='bg-inherit rounded'>
      <h2 className='text-3xl font-semibold mb-8'>Articles</h2>
      <div className='flex justify-between items-center mb-8'>
        {articles.results && articles.results.map((article) => (
          <article key={article.id} className='bg-white border-white border-2 rounded-lg shadow-lg p-8 mb-8 hover:cursor-pointer hover:translate-x-1 hover:border-slate-800 transition  ease-linear'>
            <h2 className='text-2xl font-medium mb-4'>{article.title}</h2>
            <p className='text-lg font-normal mb-4'>{article.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
