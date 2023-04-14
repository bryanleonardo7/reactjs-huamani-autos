import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import styles from './navbar.module.css';

function Navbar() {
return (
    <nav>
    <ul>
        <li>Autos</li>
        <li>Autos Usados</li>
        <img src='./img/logo.png' alt='logoauto' width={100}/>
        <li>Otras Autos</li>
        <li>Nosotros</li>
    </ul>
    <CartWidget/>
    </nav>
);
}

export default Navbar;