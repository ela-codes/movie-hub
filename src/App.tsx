import './css/App.css'
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import Search from './pages/Search';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';


function App() {
  return (
    <MovieProvider>
      <header>
        <NavBar />
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
