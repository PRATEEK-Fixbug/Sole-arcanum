import React from 'react';
import './App.css';

function ProductCard({ name, price, imgSrc }) {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={name} className="product-image" />
      <h4>{name}</h4>
      <p>{price}</p>
      <div className="product-buttons">
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
