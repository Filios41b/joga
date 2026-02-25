import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Zarezerwuj from "./Components/Zarezerwuj";
import BackToTop from "./Components/BackToTop";
import Kontakt from "./Components/Kontakt";
import Cennik from "./Components/Cennik";

function App() {
  return (
    <div className="page-container">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/zapisy" element={<Zarezerwuj />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/cennik" element={<Cennik />} />
      </Routes>
      <BackToTop />
    </Router>
    </div>
  );
}

export default App;