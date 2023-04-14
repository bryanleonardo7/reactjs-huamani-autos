import React from 'react';
import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
    <div className='cart'>
        <img src={cart} alt='cartwidget' />
        0
    </div>
    )
}

export default CartWidget