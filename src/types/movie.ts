export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date?: string;
}

export interface MovieAPIResponse {
  results: Movie[]
}

export interface MovieContextType {
  favourites: Movie[],
  addToFavourites: (movie: Movie) => void,
  removeFromFavourites: (movieId: number) => void,
  isFavourite: (movieId: number) => boolean
}

