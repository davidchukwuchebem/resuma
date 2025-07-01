import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './icons/fontawesome'; // Adjust path as needed
import Home from "./pages/Home";           
import "./styles/main.css";
import NewResume from "./pages/NewResume";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-resume" element={<NewResume />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
