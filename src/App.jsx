import { useState } from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/about";

import Skills from "./pages/skills";
import Contact from "./pages/contact";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col">
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
