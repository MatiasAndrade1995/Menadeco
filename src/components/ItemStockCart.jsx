import { useState, useContext } from "react";

import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "./context/Context";

const ItemStockCart = ({ item }) => {

    const { addToCart, quitToCart } = useContext(CartContext)

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

    const quitar = () => {
        item.stock = 10
        setContadorItems(0)
        quitToCart(item)
    }

    return (
        <div className="col d-flex">
            <div className="col-12 d-column borderCartRight ">
                <h6>Modificar</h6>
                {item.stock !== 0 ?
                    <div className="mt-2">
                        <div className="btn-group">
                            <button className="btn btn-secondary  btn-sm" onClick={restarItem}>-</button>
                            <button className="btn btn-secondary  btn-sm text-center">{item.stock !== 0 ? contadorItems : "Sin stock"}</button>
                            <button className="btn btn-secondary  btn-sm " onClick={sumarItem}>+</button>
                        </div>
                        <div className="col mt-2">
                            <button className="btn btn-secondary  btn-sm" onClick={onAdd}>Agregar</button>
                        </div>
                    </div>
                    :
                    <div>
                        <p>Sin stock</p>
                    </div>
                }
            </div>
            <div className="col-12 d-column  borderCartRight">
                <h6>Quitar</h6>
                <div className="text-center mt-4"><button className="btn btn-secondary" onClick={quitar}><BsFillTrashFill /></button></div >
            </div>
        </div>




    )
}

export default ItemStockCart;