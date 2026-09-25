import { useState } from 'react'
import { ProductPage } from './components/ProductPage';
import { ProductList } from './components/ProductList';
import { Checkout } from './components/Checkout';
import { useCart } from './hooks/useCart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

export function App() {

  const [products, setProducts] = useState([
    {id: 1, name: 'Banana', price: 1.20, quantity: 0},
    {id: 2, name: 'Apple', price: 1.45, quantity: 0},
    {id: 3, name: 'Melon', price: 2.40, quantity: 0},
    {id: 4, name: 'Kiwi', price: 1, quantity: 0},
    {id: 5, name: 'Watermelon', price: 2.40, quantity: 0},
    {id: 6, name: 'Orange', price: 1.25, quantity: 0}
  ]);

  const { cart, total, addToCart, clearCart } = useCart();

  return(
    <div>
        <Router>
            <nav className='navStyle'>
                <div className='navItems'><Link to="/products">Products</Link></div>
                <div className='navItems'><Link to="/list">List</Link></div>
                <div className='navItems'><Link to="/checkout">Checkout</Link></div>
            </nav>
            <div>
                <Routes>
                <Route path="/products" element={<ProductPage products={products} addToCart={addToCart}/>}/>
                <Route path="/list" element={<ProductList cart={cart} clearCart={clearCart} total={total}/>}/>
                <Route path="/checkout" element={<Checkout cart={cart} total={total}/>}/>
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App