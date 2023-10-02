import Nav from './components/Nav'
import Search from './components/Search'
import { NewsProvider } from './contexts/NewsContext'
import HomePageNews from './sections/HomePageNews'
import Announcements from './components/Announcements'


function App() {
  return (
    <>
      <Nav />
      <main className=''>
        <NewsProvider>
          <section className='padding-x py-4 max-container'>
            <Search />
          </section>
          <section className='padding-x py-4 max-container'>
            <Announcements />
          </section>
          <section className='padding-x py-4 max-container'>
            <HomePageNews />
          </section>
        </NewsProvider>
      </main>
    </>
  )
}

export default App
