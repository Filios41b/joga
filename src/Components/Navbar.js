import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar-custom navbar-adjust">
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">

          <Link className="navbar-brand fw-bold text-white" to="/" onClick={closeMenu}>
            JogaFunkcjonalna
          </Link>

          <button
            className="navbar-toggler text-white"
            type="button"
            aria-controls="main-nav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="main-nav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/" onClick={closeMenu}>
                  Strona Główna
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/zapisy" onClick={closeMenu}>
                  Zapisz się
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/cennik" onClick={closeMenu}>
                  Cennik
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/kontakt" onClick={closeMenu}>
                  Kontakt
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