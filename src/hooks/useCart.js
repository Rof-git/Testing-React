import { useState, useEffect } from 'react';

export function useCart() {
    //Local storage check for prev. carts
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    //Every cart change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (productToAdd) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === productToAdd.id);

            if (existingProduct) {
                return prevCart.map(item => 
                    item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...productToAdd, quantity: 1 }];
            }
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const total = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0)

    return {
        cart, total, clearCart, addToCart
  };
}