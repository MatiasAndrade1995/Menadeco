import { useContext } from "react";
import { CartContext } from "./context/Context";
import ItemStockCart from "./ItemStockCart";

const ItemListCart = () => {
    const { cart, clear, cartTotalPrice } = useContext(CartContext)
    const itemsCart = cart.filter(item => item.quantity > 0)

    return (
        cart.length > 0 ?
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-8">
                        {itemsCart.map(item => (
                            <div className="col-10 d-flex text-center mb-5" key={item.id}>
                                <div className="col borderCartRight">
                                    <h6>{item.name}</h6>
                                    <img src={item.image} className="rounded mx-auto imageProductCart shadow p-1 mb-2 bg-white rounded" alt={item.name} />
                                </div>
                                <div className="col borderCartRight">
                                    <h6>Cantidad</h6>
                                    <p className="mt-4">{item.quantity}</p>
                                </div>
                                <div className="col borderCartRight">
                                    <h6>SubTotal</h6>
                                    <p className="mt-4">$ {item.quantity * item.price}</p>
                                </div>
                                <ItemStockCart item={item} />
                            </div>
                        ))}
                    </div>
                    <div className="col-3">
                        <h2 className="totalPayTitle">Total a pagar</h2>
                        <div className="totalPay btn btn-primary"> ${cartTotalPrice()} </div>
                    </div>
                    <div className="col-12 d-flex justify-content-evenly text-center mt-5 mb-5">
                        <div className="col-3">
                            <button className="btn btn-secondary" onClick={clear}>Vaciar carrito</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-secondary" onClick={clear}>Finalizar compra</button>
                        </div>
                    </div>
                </div> 
            </div>
            :
            <div className="alert alert-danger text-center cartEmpty">
                <h1>¡Carrito vacio!</h1>
            </div>
    )
}

export default ItemListCart;