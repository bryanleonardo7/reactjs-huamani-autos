import ItemCount from "../ItemCount/ItemCount"
import './itemdetail.css';
import { useContext, useState } from "react";
import { Link} from "react-router-dom";

import { CartContext } from "../Context/CartContext";


const ItemDetail = ({id,name,img,price,description,category, stock })  => {
    
    const [quantityAddded, setQuantityAdded] =  useState(0)

    const  { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {id,name,price}

            addItem(item, quantity)
    }

    return (
        <article className='item-container'> 
            <header className='header'>
                <h2 className='title-header'>
                    {name}
                </h2>
            </header>
                <picture>
                    <img src={img}  alt={name} className='item-image'></img>
                </picture>

            <section className='text-info'>
                <p className='text'>{description}</p>
                <p className='text'>{category}</p>
                <p className='text'>{price}</p>
                <p className='text'>Stock:{stock}</p>
            </section>
            <footer>
                    {
                        quantityAddded > 0 ? (
                            <Link  to='/cart' className='option'>Terminar Compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
            </footer>
        </article>
    )
}

export default ItemDetail