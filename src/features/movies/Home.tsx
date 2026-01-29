import MovieCard from '../movies/MovieCard';
import { useState, useEffect } from 'react';
import { getPopularMovies } from '../movies/movies.api';
import { Movie } from '../movies/movie.types';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError('Failed to load movies...');
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 px-4 sm:px-8 lg:px-16 pb-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-wide">Trending Movies</h1>
      {error && <div className="text-center p-6 sm:p-12 text-base sm:text-xl text-netflix-red bg-netflix-red/10 rounded-lg border border-netflix-red/30 mb-8">{error}</div>}
      {loading ? (
        <div className="text-center p-6 sm:p-12 text-base sm:text-xl text-netflix-light-gray">Loading<span className="animate-pulse">...</span></div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 pb-8">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
