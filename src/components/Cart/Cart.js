import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem'
import './cart.css';

import { Link } from 'react-router-dom';

const Cart = () => {
const { cart, clearCart, totalQuantity, total, } = useContext(CartContext);
if(totalQuantity === 0) {
    return (
    <div>
        <h1 className='h1'>El Carrito esta vacio...</h1>
        <Link to='/' className='button-cart'>Volver al Inicio</Link>
    </div>
    );
}

return (
<div>
    <h1>Carritos de Compras</h1>
    { cart.map(p => <CartItem key={p.id} {...p} />)}
    <h3>Total: ${total}</h3>
    <button onClick={() => clearCart()} className='button-eliminar'>Vaciar carrito</button>
    <Link to='/checkout'className='button-cart' >Finalizar Compra</Link>
</div>
)
}

export default Cart