import { useEffect, useState } from 'react'
import { Layout } from './components/layouts/Layout'
import Home from './page/home'
import ListBook from './page/ListBook'

import { EVENTS } from './utils/consts'
import { getCurrentPath } from './utils/getRouter'

function App() {
  const pathname = getCurrentPath()
  const [currentPage, setCurrentPage] = useState(pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(getCurrentPath())
    }
    window.addEventListener(EVENTS.POP_STATE, onLocationChange)
    return () => {
      window.removeEventListener(EVENTS.POP_STATE, onLocationChange)
    }
  }, [])

  return (
    <Layout>
      {currentPage == '/' && <Home />}
      {currentPage == '/lista-de-lectura' && <ListBook />}
      {currentPage == '/libro' && <ListBook />}
    </Layout>
  )
}
export default App
