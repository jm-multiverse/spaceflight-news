import React, { useContext, useEffect, useState } from "react"

const NewsContext = React.createContext()
const apiUrl = "https://api.spaceflightnewsapi.net/v4"

export function useNews() {
  return useContext(NewsContext)
}

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([])
  const [blogs, setBlogs] = useState([])
  const [reports, setReports] = useState([])

  useEffect(() => {
    fetchArticles(),
      fetchBlogs(),
      fetchReports()
  }, [])

  async function fetchArticles(limit = 2, page = 1) {
    const offset = (page - 1) * limit
    try {
      await fetch(`${apiUrl}/articles?limit=${limit}&offset=${offset}`)
        .then(res => res.json())
        .then(data => {
          setArticles(data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchBlogs(limit = 2, page = 1) {
    const offset = (page - 1) * limit
    try {
      await fetch(`${apiUrl}/blogs/?limit=${limit}&offset=${offset}`)
        .then(res => res.json())
        .then(data => {
          setBlogs(data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchReports(limit = 2, page = 1) {
    const offset = (page - 1) * limit
    try {
      await fetch(`${apiUrl}/reports/?limit=${limit}&offset=${offset}`)
        .then(res => res.json())
        .then(data => {
          setReports(data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return <NewsContext.Provider value={{
    articles,
    blogs,
    reports,
  }} >
    {children}
  </NewsContext.Provider>
}