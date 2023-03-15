import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import products from "./json/products.json";

const ItemListContainer = () => {
    const [item, setItems] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(item => item.id === parseInt(id)));
            }, 2000);
        });
        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, [id]);
    return (
        item.length !== 0 ? <ItemDetail item={item} /> : <div className="containerLoader"> <span className="loader"></span> </div>
    )
}

export default ItemListContainer;