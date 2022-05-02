import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './components/Footer';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
