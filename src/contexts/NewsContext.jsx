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

  async function fetchNext(url) {
    try {
      const response = await fetch(url)
        .then(res => res.json())
        .then(data => data)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  return <NewsContext.Provider value={{
    fetchSchema,
    fetchHomePageNews,
    fetchNext
  }} >
    {children}
  </NewsContext.Provider>
}