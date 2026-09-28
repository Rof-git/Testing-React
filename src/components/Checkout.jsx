import { useState } from 'react';
import './CheckoutCSS.css';

export function Checkout({ cart }) {
  const [message, setMessage] = useState('');

  const handleCheckout = () => {
    if (cart.length > 0) {
        setMessage('Checkout successful');
    } else {
        setMessage('Cannot checkout, shopping list is empty');
    }

    setTimeout(() => {setMessage('')}, 2000);
  };

  return (
    <div className='mainDiv'>
        <h4>Checkout Page</h4>
        {message && <p>{message}</p>}
        {!message && <button onClick={handleCheckout}>Checkout</button>}
    </div>
  );
}