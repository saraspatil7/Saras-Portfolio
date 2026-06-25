import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;