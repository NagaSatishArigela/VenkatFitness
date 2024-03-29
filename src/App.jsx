import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './react-slick.css';
import "slick-carousel/slick/slick.css";
import About from './pages/About';
import Transformations from './pages/Transformations';
import ContactUs from './pages/ContactUs';
import Training from './pages/Training';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/training" element={<Training />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
