import Nav from './components/Nav'
import { NewsProvider } from './contexts/NewsContext'
import Articles from './sections/Articles'

function App() {

  return (
    <main className='relative bg-constellation'>
      <Nav />
      <section className='padding'>
        <NewsProvider>
          <Articles />
        </NewsProvider>
      </section>
    </main>
  )
}

export default App
