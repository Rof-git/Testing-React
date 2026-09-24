import { useState } from 'react'
import { ProductPage } from './components/ProductPage';
import { ProductList } from './components/ProductList';
import { Checkout } from './components/Checkout';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

export function App() {

  const [products, setProducts] = useState([
    {id: 1, name: 'banana', price: 1.30},
    {id: 2, name: 'apple', price: 1.45},
    {id: 3, name: 'melon', price: 2.40},
    {id: 4, name: 'kiwi', price: 1},
    {id: 5, name: 'watermelon', price: 2.40},
    {id: 6, name: 'orange', price: 1.25}
  ]);

  const { cart, handleAddToCart, handleFinishCheckout } = useCart();

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
                <Route path="/products" element={<ProductPage products={products}/>}/>
                <Route path="/list" element={<ProductList/>}/>
                <Route path="/checkout" element={<Checkout />}/>
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App