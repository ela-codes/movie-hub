import { Link } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie Hub</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/search" className="nav-link">
          Search
        </Link>
        <Link to="/favourites" className="nav-link">
          Favourites
        </Link>
      </div>
    </nav>
  );
}
