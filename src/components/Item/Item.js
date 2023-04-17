import './item.css'


const Item = ({id, name,img ,price, stock}) => {

return (
    <article className='card-item'>
        <header className='header'>
            <h2 className='title-header'>{name}</h2>
        </header>
        <picture>
            <img src={img} alt={name} className='card-image'/>
        </picture>
        <section className='text-info'>
            <p className='text'>
                Precio: ${price}
            </p>
            <p className='text'>
                Stock disponible: {stock}
            </p>
        </section>  
    <footer className='item-buttom'>
        <link to={'/item/${id}'}    className='text-button'>Ver detalles</link>
    </footer>
    </article>

)

}

export default Item
