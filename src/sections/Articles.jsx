import React from 'react'
import { useNews } from '../contexts/NewsContext'
import NewsSection from '../components/NewsSection'

export default function Articles() {
  const { articles } = useNews()
  console.log(articles)

  return (
    <NewsSection title='Articles' newsResponse={articles} />
  )
}
