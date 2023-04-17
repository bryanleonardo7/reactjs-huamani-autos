import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import styles from './navbar.module.css';

import { NavLink, Link } from 'react-router-dom';

function Navbar() {
return (
    <nav>
        <link to= '/' className={styles.logoimage}>
        <img src='./images/logo.png' alt='logoauto' width={200}/>
        </link>
    <div>
        <NavLink to={'/category/autos'} className={({ isActive }) =>  isActive ? 'ActiveOption' : 'Option '}>Autos</NavLink>
        <NavLink to={'/category/camioneta'} className={({ isActive }) =>  isActive ? 'ActiveOption' : 'Option '}>Camioneta</NavLink>
        <NavLink to={'/category/motos'} className={({ isActive }) =>  isActive ? 'ActiveOption' : 'Option '}>Motos</NavLink>
    </div>
    <CartWidget/>
    </nav>
);
}

export default Navbar;