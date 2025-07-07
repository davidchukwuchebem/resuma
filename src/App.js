import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./icons/fontawesome"; // Adjust path as needed
import Home from "./pages/Home";
import "./styles/main.css";
import NewResume from "./pages/NewResume";
import ResumeDataProvider from "./contexts/ResumeDataProvider";
import Template from "./pages/Template";

function App() {
  return (
    <ResumeDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-resume" element={<NewResume />} />
          <Route path="/templates" element={<Template />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ResumeDataProvider>
  );
}

export default App;
