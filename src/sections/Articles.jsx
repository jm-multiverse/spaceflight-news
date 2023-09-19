import React from 'react'
import { useNews } from '../contexts/NewsContext'

export default function Articles() {
  const { articles } = useNews()
  console.log(articles)

  function articleCard(article) {
    return (
      <article className='article'>
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
        <p>{article.news_site}</p>
        <p>{article.published_at}</p>
      </article>
    )
  }

  return (
    <section className='articles'>
      <h2>Articles</h2>
      <div className='list'>
        {articles.length > 0 && articles.results.map(a => articleCard(a))}
      </div>

    </section>
  )
}
