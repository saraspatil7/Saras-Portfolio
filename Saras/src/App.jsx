import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Added Navigate here

import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

import Home from "./pages/Home";
import About from "./components/AboutSection";
import Skills from "./components/SkillsSection";
import Projects from "./components/ProjectsSection";
import Contact from "./components/ContactSection";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#050816] text-white overflow-hidden min-h-screen">
        
        <Cursor />
        <Navbar />

        <Routes>
          {/* 1. AUTO-REDIRECT: Sends anyone landing on "/" straight to "/home" */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Your main content routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* 2. CATCH-ALL FALLBACK: If someone types a random path, push them back home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;