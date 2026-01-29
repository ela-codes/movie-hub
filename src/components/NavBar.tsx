import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent px-4 sm:px-8 py-4 flex justify-between items-center transition-colors duration-300">
      <div className="text-2xl sm:text-3xl font-bold text-netflix-red tracking-wider cursor-pointer hover:scale-105 transition-transform duration-300">
        <Link to="/">Movie Hub</Link>
      </div>
      <div className="flex gap-4 sm:gap-8 items-center">
        <Link to="/" className="text-sm sm:text-base font-medium text-netflix-light-gray hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-netflix-red after:transition-all after:duration-300 hover:after:w-full pb-2">
          Home
        </Link>
        <Link to="/search" className="text-sm sm:text-base font-medium text-netflix-light-gray hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-netflix-red after:transition-all after:duration-300 hover:after:w-full pb-2">
          Search
        </Link>
        <Link to="/favourites" className="text-sm sm:text-base font-medium text-netflix-light-gray hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-netflix-red after:transition-all after:duration-300 hover:after:w-full pb-2">
          Favourites
        </Link>
      </div>
    </nav>
  );
}
