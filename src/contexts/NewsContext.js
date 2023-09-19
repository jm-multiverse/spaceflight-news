import React, { useContext, useEffect, useState } from "react"

const NewsContext = React.createContext()
const apiUrl = "https://api.spaceflightnewsapi.net/v4/"

export function useNews() {
  return useContext(NewsContext)
}

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([])
  const [blogs, setBlogs] = useState([])
  const [reports, setReports] = useState([])

  useEffect(() => {
    fetchFeed()
  }, [])

  function fetchFeed() {
    try {
      fetch(`${apiUrl}/articles/?limit=20`)
        .then(res => res.json())
        .then(data => {
          setArticles(data)
        })

      fetch(`${apiUrl}/blogs/?limit=20`)
        .then(res => res.json())
        .then(data => {
          setBlogs(data)
        })

      fetch(`${apiUrl}/reports/?limit=20`)
        .then(res => res.json())
        .then(data => {
          setReports(data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  function getCar(id) {
    return News.find(car => car.id === id)
  }

  function addCar(id) {
  }

  function deleteCar({ id }) {
  }

  return <NewsContext.Provider value={{
    articles,
    blogs,
    reports,
  }} >
    {children}
  </NewsContext.Provider>
}