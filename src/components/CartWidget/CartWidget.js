import React from 'react';
import cart from './assets/cart.svg'
import styles from './cartwidget.module.css'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
    <Link to='/cart'className='Cart-Widget'>
        <img src={cart} alt='cartwidget' className={styles.cart} />
        {totalQuantity}
    </Link>
    )
}

export default CartWidget