import {
  HashRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
