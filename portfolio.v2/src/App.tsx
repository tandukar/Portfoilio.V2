import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import "./App.css";
import Home from "./pages/home/Home";
// import Portfoilo from "./pages/home/Portfoilo";
// import Projects from "./pages/projects/Projects";/
import Projects2 from "./pages/projects/Projects2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects2 />} />
      </Routes>
    </Router>
  );
}

export default App;
