import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Zarezerwuj from "./Components/Zarezerwuj";
import Kontakt from "./Components/Kontakt";
import Cennik from "./Components/Cennik";
import Footer from "./Components/Footer";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/zapisy" element={<Zarezerwuj />} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="page-container">
        <Navbar />
        <main className="content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;