import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem'

import { Link } from 'react-router-dom';

const Cart = () => {
const { cart, clearCart, totalQuantity, total, } = useContext(CartContext);
if(totalQuantity === 0) {
    return (
    <div>
        <h1>El Carrito esta vacio...</h1>
        <Link to='/' >Volver Al Inicio</Link>
    </div>
    );
}

return (
<div>
    { cart.map(p => <CartItem key={p.id} {...p} />)}
    <h3>Total: ${total}</h3>
    <button onClick={() => clearCart()}>Vaciar carrito</button>
    <Link to='/checkout' >Finalizar Compra</Link>
</div>
)
}

export default Cart