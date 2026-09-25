import { useState } from 'react';
import './ProductListCSS.css';

export function ProductList({ cart, total, clearCart }) {

  const [isClearing, setIsClearing] = useState(false);

  const handleClear = () => {
    setIsClearing(true);
    setTimeout(() => {
        clearCart();
        setIsClearing(false);
    }, 600);
  }

  return (
    <div class='mainDiv'>
        <h4>Current Shopping List</h4>
        <ul>
        {cart.map((product, index) => (
          <li 
            key={product.id} 
            className={`cart-item ${isClearing ? 'fly-away' : ''}`} 
            style={{ '--i': index }}
          >
            {product.quantity} {product.name} - ${product.price} / kg
          </li>
        ))}
      </ul>
      <h3>Total: {total}$</h3>
      <button onClick={handleClear}>Clear cart</button>
    </div>
  );
}