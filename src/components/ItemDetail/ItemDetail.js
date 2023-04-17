import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ id,name,img,price,description,category, stock })  => {
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
                <picture>
                    <img src={img}  alt={name}></img>
                </picture>

            <section>
                <p>{price}</p>
                <p>{description}</p>
                <p>{category}</p>
            </section>
            <footer>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail