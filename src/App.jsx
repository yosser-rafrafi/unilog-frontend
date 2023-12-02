
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Ads from './components/Ads/Ads';
import Destinations from './components/Destinations/Destinations';
//import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';
import About from './components/About/About'

import './App.scss';

const App = () => {
  return (
    <Router>
    <div>
      <Header />
      <Home />
      <Search />
      <Destinations />
      <Ads />
      <About />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
