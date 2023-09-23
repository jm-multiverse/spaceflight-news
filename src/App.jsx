import Nav from './components/Nav'
import Search from './components/Search'
import { NewsProvider } from './contexts/NewsContext'
import HomePageNews from './sections/HomePageNews'
import Announcements from './components/Announcements'


function App() {
  return (
    <main className='relative bg-constellation'>
      <Nav />
      <NewsProvider>
        <section className='padding-x py-4'>
          <Search />
        </section>
        <section className='padding-x py-4'>
          <Announcements />
        </section>
        <section className='padding-x py-4'>
          <HomePageNews />
        </section>
      </NewsProvider>
    </main>
  )
}

export default App
