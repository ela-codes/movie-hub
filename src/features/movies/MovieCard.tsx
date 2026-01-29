import { useMovieContext } from '../../contexts/MovieContext';
import { Movie } from './movie.types';
import React from 'react';

export default function MovieCard({ movie }: { movie: Movie }) {
  const { isFavourite, addToFavourites, removeFromFavourites } =
    useMovieContext();
  const favourite = isFavourite(movie.id);

  function onFavouriteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (favourite) removeFromFavourites(movie.id);
    else addToFavourites(movie);
  }

  return (
    <div className="group relative rounded-lg overflow-hidden bg-netflix-dark-gray transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10 cursor-pointer animate-[fadeIn_0.5s_ease-out]">
      <div className="relative w-full aspect-[2/3] overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <button
            className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm border-2 transition-all duration-300 z-20 ${
              favourite
                ? 'bg-netflix-red/20 text-netflix-red border-netflix-red hover:bg-netflix-red/30'
                : 'bg-black/70 text-white border-transparent hover:bg-black/90 hover:border-netflix-red'
            } hover:scale-110`}
            onClick={onFavouriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="p-3 sm:p-4 bg-netflix-dark-gray">
        <h3 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {movie.title}
        </h3>
        <p className="text-xs sm:text-sm text-netflix-gray">
          {movie.release_date?.split('-')[0]}
        </p>
      </div>
    </div>
  );
}
