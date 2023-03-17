import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (itemCaptured, contadorItems) => {
        if (itemCaptured.quantity === 0) {
            itemCaptured.quantity = contadorItems
            setCart([...cart, itemCaptured])
        } else {
            itemCaptured.quantity += contadorItems
            const newCart = cart.map(el => el.id === itemCaptured.id ? itemCaptured : el)
            setCart(newCart)
        }
    }

    const quitToCart = (itemCaptured) => {
        itemCaptured.quantity = 0
        const newCart = cart.filter(itemCaptured => 0 < itemCaptured.quantity)
        setCart(newCart)
    }

    const totalQuantity = cart.reduce((acc, item) => {
        return acc += item.quantity
    }, 0)

    const clear = () => {
        cart.forEach(item => {
            item.quantity = 0;
            item.stock = 10;
        })
        setCart([])
    }

    const cartTotalPrice = () => {

        return cart.reduce((accum, item) => accum += item.quantity * item.price, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, totalQuantity, quitToCart, clear, cartTotalPrice }}>
            {children}
        </CartContext.Provider >
    )

}

export default CartContextProvider;