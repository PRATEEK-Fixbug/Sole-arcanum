import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';
import AboutPage from './AboutPage'; // Import AboutPage
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} /> {/* Add About Page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
