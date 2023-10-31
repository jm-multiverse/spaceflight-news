import React from 'react'
import NewsCard from './NewsCard'

export default function NewsList({ newsResponse }) {
  return (
    <>
      {newsResponse.results &&
        newsResponse.results.map((article) =>
          <NewsCard key={article.id} article={article} />
        )
      }
    </>
  )
}
