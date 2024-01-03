import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import "./App.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Projects2 from "./pages/projects/Projects2";
import Portfolio from "./pages/portfolio/Portfolio";
import Connect from "./pages/connect/Connect";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/prev_projects" element={<Projects />} />
        <Route path="/projects" element={<Projects2 />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
  );
}

export default App;
