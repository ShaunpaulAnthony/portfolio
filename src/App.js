import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>
        <main className="text-gray-800 bg-emerald-100 body-font">
            <Navbar />
            <About />
            <Projects />
            <Skills />
        </main>
    </BrowserRouter>
  );
}

export default App;
