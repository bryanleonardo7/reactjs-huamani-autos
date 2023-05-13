import './item.css'

import { Link } from "react-router-dom"

const Item = ({id, name,img ,price}) => {

return (
    <article className='card-item'>
        <header className='header'>
            <h2 className='title-header'>{name}</h2>
        </header>
        <picture >
            <img src={img} alt={name} className='card-image'/>
        </picture>
        <section className='text-info'>
            <p className='text'>
                Precio: ${price}
            </p>
        </section>  

    <footer className='item-buttom'>
        <Link to={`/item/${id}`}    className='text-buttom'>Ver detalles</Link>
    </footer>

    </article>

)

}

export default Item
