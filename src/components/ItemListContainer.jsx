import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import products from "./json/products.json";
import MyCarousel from "./MyCarousel";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? products.filter(item => item.category === id) : products);
            }, 2000);
        });
        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, [id]);

    return (
        items.length > 0 ?
            <div className="container">
                <MyCarousel />
                <div className="ItemListContainerComponent">
                    <ItemList items={items} />
                </div>
            </div>
            :
            <div className="containerLoader">
                <span className="loader"></span>
            </div>
    )
}

export default ItemListContainer;