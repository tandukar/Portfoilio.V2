import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Portfoilo from "./pages/home/Portfoilo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfoilo" element={<Portfoilo />} />
      </Routes>
    </Router>
  );
}

export default App;
