import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import React, { Suspense } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Cennik from "./Components/Cennik";
import Kontakt from "./Components/Kontakt";
import BackToTop from "./Components/BackToTop";
import SEO from "./Components/SEO";

const Zdjecia = React.lazy(() => import("./Components/Zdjecia"));
const Zarezerwuj = React.lazy(() => import("./Components/Zarezerwuj"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route
          path="/zapisy"
          element={
            <Suspense fallback={<div>Ładowanie...</div>}>
              <Zarezerwuj />
            </Suspense>
          }
        />
        <Route path="/cennik" element={<Cennik />} />
        <Route
          path="/galeria"
          element={
            <Suspense fallback={<div>Ładowanie galerii...</div>}>
              <Zdjecia />
            </Suspense>
          }
        />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <div className="page-container">
          <Navbar />
          <main className="content">
            <AnimatedRoutes />
          </main>
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;