import './App.css'
import HomePage from './pages/Home/page'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFound/page'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
