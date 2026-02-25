import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div className="navbar-custom navbar-adjust">
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">

        {/* Logo / Tytuł */}
        <Link className="navbar-brand fw-bold text-white" to="/">
          JogaFunkcjonalna
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Linki */}
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Strona Główna
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/zapisy">
                Zapisz się
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/kontakt">
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cennik">
                Cennik
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    </div>
  );
}

export default Navbar;