import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { useState } from "react";



function App() {
    const [cart, setCart] = useState([])
    const addToCart = (itemCaptured, quantityTotal) => {
        if (itemCaptured.quantity === 0) {
            itemCaptured.quantity = quantityTotal
            setCart([...cart, itemCaptured])
        } else {
            itemCaptured.quantity+= quantityTotal
            const newCart = cart.map(el => el.id === itemCaptured.id ? itemCaptured : el)
            console.log(newCart)
            setCart(newCart)
        }
        
    }


    return (
        <div>
            <Router>
                <NavBar cart={cart} />
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
                    <Route path={"*"} element={<Error404 />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;