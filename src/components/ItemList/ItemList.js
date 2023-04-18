import Item from '../Item/Item'


const  ItemList = ({ products }) => {
    return (  
        <div className='list-group'> 
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
        )
}

export default ItemList