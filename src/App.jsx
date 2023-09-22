import Nav from './components/Nav'
import { NewsProvider } from './contexts/NewsContext'
import Articles from './sections/Articles'
import Blogs from './sections/Blogs'
import Reports from './sections/Reports'

function App() {

  return (
    <main className='relative bg-constellation'>
      <Nav />
      <NewsProvider>
        <section className='padding'>
          <Articles />
        </section>
        <section className='padding'>
          <Blogs />
        </section>
        <section className='padding'>
          <Reports />
        </section>
      </NewsProvider>
    </main>
  )
}

export default App
