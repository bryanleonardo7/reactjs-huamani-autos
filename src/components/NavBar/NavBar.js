import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
function Navbar() {
return (
    <nav>
        <h1>COMPRAUTOS</h1>
    <ul>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Autos</li>
        <li>Contactos</li>
    </ul>
    <CartWidget/>
    </nav>
);
}

export default Navbar;