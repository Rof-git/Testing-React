import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  };

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
      <button onClick={goToCheckout} className="nav-button"> Go to Checkout </button>
      <p>Or maybe...</p>
      <button onClick={handleClear}>Clear cart</button>
    </div>
  );
}