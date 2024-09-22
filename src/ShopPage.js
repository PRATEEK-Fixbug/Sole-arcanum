import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';

const products = [
  { name: 'Classic Sneakers', price: '$99', imgSrc: '/images/1.png', type: 'Sneakers' },
  { name: 'Modern Loafers', price: '$120', imgSrc: '/images/2.png', type: 'Loafers' },
  { name: 'Sporty Trainers', price: '$85', imgSrc: '/images/3.png', type: 'Trainers' },
  { name: 'Running Shoes', price: '$110', imgSrc: '/images/4.png', type: 'Running' },
  { name: 'Formal Shoes', price: '$150', imgSrc: '/images/5.jpg', type: 'Formal' },
  { name: 'Casual Sneakers', price: '$75', imgSrc: '/images/6.png', type: 'Sneakers' },
  { name: 'Elegant Loafers', price: '$135', imgSrc: '/images/7.png', type: 'Loafers' },
  { name: 'Walking Shoes', price: '$95', imgSrc: '/images/8.webp', type: 'Walking' },
  { name: 'Hiking Boots', price: '$140', imgSrc: '/images/91.jpeg', type: 'Boots' },
  { name: 'Slip-ons', price: '$80', imgSrc: '/images/10.webp', type: 'Slip-ons' }
];

function ShopPage() {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(product => product.type === filter);

  return (
    <div className="shop-container">
      <h2>Shop Our Collection</h2>
      
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Sneakers')}>Sneakers</button>
        <button onClick={() => handleFilterChange('Loafers')}>Loafers</button>
        <button onClick={() => handleFilterChange('Trainers')}>Trainers</button>
        <button onClick={() => handleFilterChange('Running')}>Running</button>
        <button onClick={() => handleFilterChange('Boots')}>Boots</button>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            imgSrc={product.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
