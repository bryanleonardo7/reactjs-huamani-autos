import React from 'react';
import cart from './assets/cart.svg'
import styles from './cartwidget.module.css'

const CartWidget = () => {
    return (
    <div>
        <img src={cart} alt='cartwidget' className={styles.cart} />
    </div>
    )
}

export default CartWidget