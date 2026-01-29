import { useMovieContext } from '../../contexts/MovieContext';
import MovieCard from '../movies/MovieCard';

export default function Favourites() {
  const { favourites } = useMovieContext();

  if (favourites && favourites.length > 0) {
    return (
      <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 px-4 sm:px-8 lg:px-16 pb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-wide">Your Favourite Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 pb-8">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">No favourite movies yet.</h2>
      <p className="text-base sm:text-lg lg:text-xl text-netflix-gray max-w-lg">Start adding movies to your favourites and they will appear here.</p>
    </div>
  );
}
