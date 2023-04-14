import React from "react";
import styles from './itemlistcontainer.module.css'


const ItemListContainer = ({greeting}) => {
    return (
    <div>
        <h1>{greeting}</h1>
    </div>
    )
}

export default ItemListContainer