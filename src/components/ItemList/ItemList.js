import './itemlist.css'
import Item from '../Item/Item'



const  ItemList = ({ products }) => {
    return (  
        <div className='List-Group'> 
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
        )
}

export default ItemList