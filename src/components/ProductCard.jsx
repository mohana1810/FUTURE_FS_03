import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  const { name, price, category, emoji, image, color, description } = product;

  return (
    <div className="product-card fade-in">
      
      <div 
        className="product-image-container" 
        style={{ backgroundColor: color || '#fdf2e9' }}
      >
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="product-card-img" 
            loading="lazy" 
          />
        ) : (
          <span role="img" aria-label={name}>
            {emoji}
          </span>
        )}
      </div>
      <div className="product-details">
        <h3 className="product-title">{name}</h3>
        <p className="product-desc">{description}</p>
        <div className="product-footer">
          <span className="product-price">₹{price}</span>
          <button 
            onClick={() => onAddToCart(product)} 
            className="product-add-btn"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

// Category banners ready for dog, cat, bird, fish, healthcare
