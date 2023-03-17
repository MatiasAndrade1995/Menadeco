import { useContext, useState } from "react";
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { CartContext } from "./context/Context";
import { useNavigate } from "react-router-dom";



//import products from "./json/products.json";

const CheckOut = () => {

    const { cart, cartTotalPrice, clear } = useContext(CartContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");
    const [orderUpdated, SetOrderUpdated] = useState(false);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const finish = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
            clear();
            navigate("/ThankYou")
        }, 3000)
        setTimeout(() => {
            navigate("/")
        }, 6000)

    }

    const generateOrder = () => {
        const buyer = {
            name: name,
            email: email,
            phone: phone,
        }
        const total = cartTotalPrice();
        const fecha = new Date();
        const minutes = fecha.getMinutes()
        const seconds = fecha.getSeconds()
        const dateOrder = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${minutes >= 0 && minutes <= 9 ? 0 : ''}${fecha.getMinutes()}:${seconds >= 0 && seconds <= 9 ? 0 : ''}${fecha.getSeconds()}`;

        const order = {
            buyer: buyer,
            items: { cart },
            total: total,
            date: dateOrder
        };

        const db = getFirestore();

        const ordersCollection = collection(db, "orders")
        setLoader(true)
        addDoc(ordersCollection, order).then((data) => {
            setOrderId(data.id)
            setLoader(false)
        })
    }

    const itemsCart = cart.filter(item => item.quantity > 0)

    const updateOrder = (orderId) => {
        const db = getFirestore();
        const order = doc(db, "orders", orderId)
        getDoc(order).then((data) => {
            const total = data.data().total * 1.1;
            updateDoc(order, { total: total.toFixed(2) }).then(data => {
                SetOrderUpdated(true);
            })
        })
    }

    console.log(orderUpdated)
    return (

        cart.length > 0 ? <div className="container-fluid mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <div className="formulario text-center">
                        <h2>Datos para realizar tu pedido</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" onInput={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" onInput={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="text" className="form-control" id="phone" onInput={(e) => { setPhone(e.target.value) }} />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={generateOrder}>Generar orden de compra</button>
                            <button type="button" className="btn btn-secondary mt-3" onClick={() => { updateOrder(orderId) }}>Actualizar Orden</button>
                        </form>
                    </div>
                </div>
                <div className="col-4 resumenCompra">
                    <div>
                        <h2 className="text-center">Resumen de compra</h2>
                        {itemsCart.map(item => (
                            <div className="containerSummaryBuy mt-3 mb-3" key={item.id}>
                                <img className="imageSummaryBuy shadow p-1 bg-white rounded" src={item.image} alt={item.name} />
                                <p className="textSummaryBuy">{item.name} -- {item.quantity} unidades -- $ {item.quantity * item.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className="col-12">
                        <h3>Total a pagar</h3>
                        <div className="center-block bg-primary text-white classPrice "> <b>${cartTotalPrice()}</b> </div>
                    </div>
                </div>
                <div className="col-12">
                    {orderId && <div className="alert alert-success mt-4 compraSucces col-6" role="alert">
                        Se generó orden de compra con el ID: <b>{orderId}</b>.
                    </div>}
                    {orderUpdated && <div className="alert alert-warning mt-4 compraSucces col-6" role="alert">
                        Se actualizó la orden de compra con el ID: <b>{orderId}</b>, cobro adicional del 10%.
                    </div>}
                    {loader && <div className="containerLoader">
                        <span className="loader"></span>
                    </div>}
                    {orderId && <div className="containerFinishBuy d-flex">
                        <button type="button" className="btn btn-secondary finishBuy mt-5" onClick={() => finish()} >Finalizar</button>
                    </div>}
                </div>
            </div>
        </div>
            :
            <div className="alert alert-danger text-center checkOutEmpty">
                <h1>Necesita realizar un pedido para visualizar esta página.</h1>
            </div>

    )
}

export default CheckOut;