import React from 'react'
import { useNews } from '../contexts/NewsContext'
import NewsSection from '../components/NewsSection'

export default function Reports() {
  const { reports } = useNews()
  console.log(reports)

  return (
    <NewsSection title='Reports' newsResponse={reports} />
  )
}
