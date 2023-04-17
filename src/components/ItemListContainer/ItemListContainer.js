import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../services/asyncMosk";
import ItemList from '../ItemList/ItemList';
import styles from './itemlistcontainer.module.css'

import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const  asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
    <div>
        <h1 className={styles.titleHome}>Bienvenidos a ConcesionariaFreaking</h1>
        <ItemList products={products}/>
    </div>
    )
}

export default ItemListContainer