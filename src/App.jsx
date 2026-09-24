import { useState } from 'react'
import { ProductForm } from './components/ProductForm';
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

  const MenuProducts = () => <h2>Products</h2>;
  const MenuList = () => <h2>List</h2>;
  const MenuCheckout = () => <h2>Checkout</h2>;

  return(
    <div>
        <Router>
            <nav class='navStyle'>
                <div class='navItems'><Link to="/products">Products</Link></div>
                <div class='navItems'><Link to="/list">List</Link></div>
                <div class='navItems'><Link to="/checkout">Checkout</Link></div>
            </nav>
            <div>
                <Routes>
                <Route path="/products" element={<MenuProducts/>} />
                <Route path="/list" element={<MenuList/>} />
                <Route path="/checkout" element={<MenuCheckout />} />
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App