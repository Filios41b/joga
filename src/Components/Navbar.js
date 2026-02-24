import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-adjust navbar navbar-expand-lg">
      <div className="container d-flex navbar-custom">
        <Link className="nav-link text-white me-5" to="/">Strona Główna</Link>
        <Link className="nav-link text-white me-5" to="/zarezerwuj">Zapisz się</Link>
      </div>
    </nav>
  );
}

export default Navbar;