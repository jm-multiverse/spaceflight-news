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
        <section className='padding-x padding-t'>
          <Articles />
        </section>
        <section className='padding-x'>
          <Blogs />
        </section>
        <section className='padding-x'>
          <Reports />
        </section>
      </NewsProvider>
    </main>
  )
}

export default App
