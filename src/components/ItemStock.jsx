import { useState, useContext } from "react";
import { CartContext } from "./context/Context";

const ItemStock = ({ item }) => {

    const { addToCart } = useContext(CartContext)
    const [contadorItems, setContadorItems] = useState(1);
    const [stockTotal, setStockTotal] = useState(item.stock);


    const sumarItem = () => {
        if (item.stock > 1) {
            setContadorItems(contadorItems + 1);
            item.stock--
        }
    }

    const restarItem = () => {
        if (item.stock < stockTotal) {
            setContadorItems(contadorItems - 1);
            item.stock++
        }
    }

    const onAdd = () => {
        setContadorItems(1);
        if (item.stock !== 0) {
            item.stock--
            addToCart(item, contadorItems)
            setStockTotal(item.stock)
        }
    }

    return (
        <div className="container itemStockContainer">
            <div className="row">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-secondary" onClick={restarItem}>-</button>
                        <button className="btn btn-secondary text-center">{item.stock !== 0 ? contadorItems : "Sin stock"}</button>
                        <button className="btn btn-secondary" onClick={sumarItem}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col">
                    <button className="btn btn-secondary" onClick={onAdd}>Agregar Al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemStock;