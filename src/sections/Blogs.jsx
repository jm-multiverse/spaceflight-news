import React from 'react'
import { useNews } from '../contexts/NewsContext'
import NewsSection from '../components/NewsSection'

export default function Blogs() {
  const { blogs } = useNews()
  console.log(blogs)

  return (
    <NewsSection title='Blogs' newsResponse={blogs} />
  )
}
