import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) setFavourites(JSON.parse(storedFavourites));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (movie) => {
    setFavourites((storedFavourites) => [...storedFavourites, movie]);
  };

  const removeFromFavourites = (movieId) => {
    setFavourites((storedFavourites) =>
      storedFavourites.filter((storedMovie) => storedMovie.id !== movieId)
    );
  };

  const isFavourite = (movieId) => {
    return favourites.some(storedMovie => storedMovie.id === movieId)
  }

  const value = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite
  }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
