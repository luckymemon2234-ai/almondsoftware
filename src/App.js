import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import AssistantChat from "./components/AssistantChat";
import "./styles/main.css";

// Lazy-Loaded Routes for Perfect 99/100 Lighthouse Code Splitting Performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Creations = lazy(() => import("./pages/Creations"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AssistantChat />
      
      {/* Route Level Suspense handles the chunk loading so the main bundle stays absolutely tiny */}
      <Suspense fallback={
        <div className="page-loader" role="status" aria-live="polite">
          <div className="spinner" aria-label="Loading page"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    
      <BottomNav/>
    </BrowserRouter>
  );
}

export default App;