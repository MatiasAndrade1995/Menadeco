import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./context/Context";
import ItemDetail from "./ItemDetail";
// import products from "./json/products.json";

const ItemDetailContainer = () => {
    const [item, setItems] = useState([]);
    const { id } = useParams();


    const { cart } = useContext(CartContext);

    useEffect(() => {
        const itemExiste = cart.find(el => el.id === id)
        if (itemExiste) {
            setItems(itemExiste)
        } else {
            const db = getFirestore();
            const document = doc(db, "items", id);
            getDoc(document).then(element => {
                setItems({ id: element.id, ...element.data() });
            });
        }
    }, [id, cart]);

    return (
        item.length !== 0 ?
            <ItemDetail item={item} />
            : <div className="containerLoader"> <span className="loader"></span> </div>
    )
}

export default ItemDetailContainer;