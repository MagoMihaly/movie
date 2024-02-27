import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Trendings } from './pages/Trendings'
import { BottomNavbar } from './components/BottomNavbar'
import { MoviesPage } from './pages/MoviesPage'
import { TvSeriesPage } from './pages/TvSeriesPage'

function App() {

  return (
    <BrowserRouter>

      <Header />
      <div className="app">
          <Routes>
          <Route path='/' element={<Trendings />}/>
          <Route path='movies' element={<MoviesPage />}/>
          <Route path='series' element={<TvSeriesPage />}/>
      </Routes>
      </div>
      <BottomNavbar />
    </BrowserRouter>
  )
}

export default App
