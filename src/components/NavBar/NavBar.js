import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';

import { NavLink, Link } from 'react-router-dom';

function Navbar() {
return (
    <div>
    <nav className='nav'>
        <Link to='/' className='link-h2'>
        <h2 className='header-title'>FREAKINGC</h2>
        </Link>
    <div>
        <NavLink to={`/category/Auto`} className='nav-link'>Autos</NavLink>
        <NavLink to={`/category/Camioneta`} className='nav-link'>Camioneta</NavLink>
        <NavLink to={`/category/Moto`} className='nav-link'>Motos</NavLink>
    </div>
    <CartWidget/>
    </nav>
    </div>
    
);
}

export default Navbar