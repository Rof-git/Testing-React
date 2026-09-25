import { useState } from 'react';
import './ProductPageCSS.css';

export function ProductPage({ products, addToCart }) {
  const [notifications, setNotifications] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);

    const uniqueId = Date.now() + Math.random();
    const newNotification = {
      id: uniqueId,
      text: `${product.name} added to cart`
    };

    setNotifications(prev => [...prev, newNotification]);

    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== uniqueId));
    }, 2000);
  };

  return (
    <div class='mainDiv'>
      <h4>Our Products</h4>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span className="product-info">
              {product.name} - ${product.price} / kg
            </span>
            
            <button onClick={() => handleAddToCart(product)} className="add-button"> Add to List </button>
          </li>
        ))}
      </ul>
      <div className="toast-container">
        {notifications.map(note => (
            <div key={note.id} className="toast-notification"> {note.text} </div>
        ))}
      </div>
    </div>
  );
}