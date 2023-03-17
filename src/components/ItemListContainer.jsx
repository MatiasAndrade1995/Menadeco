import {collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import MyCarousel from "./MyCarousel";
// import products from "./json/products.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    // useEffect(() => {

    //     const promesa = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(id ? products.filter(item => item.category === id) : products);
    //         }, 2000);
    //     });
    //     promesa.then((respuesta) => {
    //         setItems(respuesta);
    //     });
    // }, [id]);

    // useEffect(() => {   // CARGA PRODUCTOS DEL JSON LOCAL AL FIRESTORE
    //         const db = getFirestore();
    //         const itemsCollection = collection(db, "items")
    //     products.forEach(item => { 
    //             addDoc(itemsCollection, item)
    //     }) 
    //     console.log("Se agregaron los productos")
    // }, []);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({ id: element.id, ...element.data() })));
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