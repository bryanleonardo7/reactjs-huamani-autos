import React from 'react';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import './cartitem.css';


const CartItem = ({name,id ,price, quantity,img}) => {
const { removeItem } = useContext(CartContext)


return (
    <div className='container-cartitem'>
        <span>Nombre: {name}</span>
        <img src={img} className='img-card'></img>
        <span>Precio: ${price}</span>
        <span>Cantidad: {quantity}</span>
        <button onClick={() =>removeItem(id)} className='button-eliminar'>Eliminar</button>
    </div>
);
};

export default CartItem