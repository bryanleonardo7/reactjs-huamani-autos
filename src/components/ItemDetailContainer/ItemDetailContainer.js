import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from '../Config/Firebase';
import { doc, getDoc } from 'firebase/firestore';

import { useParams } from "react-router-dom";

const  ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);

    const { itemId} = useParams()

    useEffect(() => {
        setLoading(true);
    
        const docRef = doc(db, 'products', itemId);
    
        getDoc(docRef)
        .then((response) => {
            const data = response.data();
            const productAdapted = { id: response.id, ...data };
            setProduct(productAdapted);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [itemId]);
    
    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    )
    
}

export default ItemDetailContainer