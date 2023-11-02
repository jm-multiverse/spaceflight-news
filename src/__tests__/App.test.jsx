import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { NewsProvider } from '../contexts/NewsContext'
import App from '../App'

test('renders App component', () => {
  render(
    <BrowserRouter>
      <NewsProvider>
        <App />
      </NewsProvider>
    </BrowserRouter>
  )
})
