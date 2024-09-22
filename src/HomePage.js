import React from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';
import './App.css';

function HomePage() {
  return (
    <div className="home-container">
      <Banner />
      <div className="intro-section">
        <h2>Welcome to Sole Arcanum</h2>
        <p>Your one-stop destination for premium footwear. Explore the latest trends and step into comfort with style.</p>
      </div>

      <div className="flex-container">
        <div className="welcome-flex">
          <p>Discover shoes that define your journey. Whether it’s casual or formal, we’ve got you covered.</p>
        </div>
      </div>

      <div className="product-section">
        <h3>Our Top Picks</h3>
        <div className="product-card-container">
          <ProductCard name="Classic Sneakers" price="$99" imgSrc="/images/1.png" />
          <ProductCard name="Modern Loafers" price="$120" imgSrc="/images/2.png" />
          <ProductCard name="Sporty Trainers" price="$85" imgSrc="/images/3.png" />
        </div>
      </div>

      <div className="shop-now-btn">
        <a href="/shop">Shop Now</a>
      </div>
    </div>
  );
}

export default HomePage;
