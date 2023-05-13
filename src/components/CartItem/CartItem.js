import React from 'react';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';


const CartItem = ({name,id ,price, quantity}) => {
const { removeItem } = useContext(CartContext)

return (
    <div>
        <span>{name}</span>
        <span>Precio:$ {price}</span>
        <span>Cantidad:{quantity}</span>
        <button onClick={() =>removeItem(id)}>Eliminar</button>
    </div>
);
};

export default CartItem