import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Zarezerwuj from "./Components/Zarezerwuj";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/zarezerwuj" element={<Zarezerwuj />} />
      </Routes>
    </Router>
  );
}

export default App;