import { Movie, MovieContextType } from "../types/movie";
import { createContext, useState, useContext, useEffect } from "react";
import { ReactNode } from "react";

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<Movie[]>(() => {
    const storedFavourites = localStorage.getItem("favourites");
    return storedFavourites ? JSON.parse(storedFavourites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (movie: Movie) => {
    setFavourites((storedFavourites) => [...storedFavourites, movie]);
  };

  const removeFromFavourites = (movieId: number) => {
    setFavourites((storedFavourites) =>
      storedFavourites.filter((storedMovie) => storedMovie.id !== movieId),
    );
  };

  const isFavourite = (movieId: number) => {
    return favourites.some((storedMovie) => storedMovie.id === movieId);
  };

  const value: MovieContextType = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
