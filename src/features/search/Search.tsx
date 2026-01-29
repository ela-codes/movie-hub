import MovieCard from '../movies/MovieCard';
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../movies/movies.api';
import { Movie } from '../movies/movie.types';
import React from 'react';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      setError('Failed to search movies...');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

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
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-3xl">
        <label htmlFor="input-form"></label>
        <input
          type="text"
          name="search-input"
          id="input"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 bg-netflix-dark-gray border-2 border-transparent rounded text-white text-sm sm:text-base focus:outline-none focus:border-white focus:bg-netflix-hover transition-all duration-300 placeholder:text-netflix-gray"
        />
        <button type="submit" className="px-6 sm:px-8 py-3 sm:py-3.5 bg-netflix-red text-white rounded text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-netflix-dark-red hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
          Search
        </button>
      </form>
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
