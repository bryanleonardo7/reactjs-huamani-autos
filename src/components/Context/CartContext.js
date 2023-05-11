import  { createContext, useState } from 'react';

export const CartContext = createContext({ cart: [],  totalQuantity: 0,
    total: 0,})

export const CartProvider = ({ children }) => {
    
const [cart, setCart] = useState([]);

const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
};

const getTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
};


const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
    setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
    console.error("Este producto ya esta en el carrito");
    }
};

const removeItem = (itemId) => {
    const cartUpdate = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdate);
};

const clearCart = () => {
    setCart([]);
};

const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
};

return (
    <CartContext.Provider value={{ cart,totalQuantity: getTotalQuantity(),
        total: getTotal(), addItem, removeItem, clearCart, isInCart,}}>
    {children}
    </CartContext.Provider>
)
}


