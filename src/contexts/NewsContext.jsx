import React, { useContext } from "react"

const NewsContext = React.createContext()
const apiUrl = "https://api.spaceflightnewsapi.net/v4"

export function useNews() {
  return useContext(NewsContext)
}

export const NewsProvider = ({ children }) => {

  async function fetchSchema(name, parameters) {
    const baseUrl = `${apiUrl}/${name}?`
    const params = new URLSearchParams(parameters)
    const url = baseUrl + params.toString()
    try {
      const response = await fetch(url)
        .then(res => res.json())
        .then(data => data)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchHomePageNews() {
    const articles = await fetchSchema('articles', { limit: 2 })
    const blogs = await fetchSchema('blogs', { limit: 2 })
    const reports = await fetchSchema('reports', { limit: 2 })
    const news = { articles, blogs, reports }
    return news
  }

  async function search(filter, q) {
    if (filter === 'all') {
      const articles = await fetchSchema('articles', { search: q })
      const blogs = await fetchSchema('blogs', { search: q })
      const reports = await fetchSchema('reports', { search: q })
      const hasResults = articles.results.length > 0 || blogs.results.length > 0 || reports.results.length > 0
      const news = { articles, blogs, reports, hasResults }
      return news
    }

    if (filter === 'articles') {
      const articles = await fetchSchema('articles', { search: q })
      const hasResults = articles.results.length > 0
      const news = { articles, hasResults }
      return news
    }

    if (filter === 'blogs') {
      const blogs = await fetchSchema('blogs', { search: q })
      const hasResults = blogs.results.length > 0
      const news = { blogs, hasResults }
      return news
    }

    if (filter === 'reports') {
      const reports = await fetchSchema('reports', { search: q })
      const hasResults = reports.results.length > 0
      const news = { reports, hasResults }
      return news
    }

    return 'Invalid filter: ' + filter
  }


  return <NewsContext.Provider value={{
    fetchSchema,
    fetchHomePageNews,
    search
  }} >
    {children}
  </NewsContext.Provider>
}