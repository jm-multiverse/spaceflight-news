import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NewsProvider } from './contexts/NewsContext'
import Hero from './pages/Hero'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Blogs from './pages/Blogs'
import Reports from './pages/Reports'
import SearchResults from './pages/SearchResults'
import Login from './pages/Login'

function App() {
  return (
    <NewsProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='login' element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='articles' element={<Articles />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='reports' element={<Reports />} />
          <Route path='search' element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </NewsProvider>
  )
}

export default App
