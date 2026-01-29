import Favourites from './features/favourites/Favourites';
import Home from './features/movies/Home';
import Search from './features/search/Search';
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
  );
}

export default App;
