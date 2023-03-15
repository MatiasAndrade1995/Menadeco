import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListCart from "./components/ItemListCart";
import CartContextProvider from "./components/context/Context";


// export const cartContext = createContext();


function App() {

    // const [cart, setCart] = useState([])

    // const addToCart = (itemCaptured, contadorItems) => {
    //     if (itemCaptured.quantity === 0) {
    //         itemCaptured.quantity = contadorItems
    //         setCart([...cart, itemCaptured])
    //     } else {
    //         itemCaptured.quantity += contadorItems
    //         const newCart = cart.map(el => el.id === itemCaptured.id ? itemCaptured : el)
    //         setCart(newCart)
    //     }
    // }

    // const quitToCart = (itemCaptured) => {
    //     itemCaptured.quantity = 0
    //     const newCart = cart.filter(itemCaptured => 0 < itemCaptured.quantity)
    //     console.log(newCart)
    //     setCart(newCart)
    // }

    // const totalQuantity = cart.reduce((acc, item) => {
    //     return acc += item.quantity
    // }, 0)

    

    // const clear = () => {
    //     cart.forEach(item => {
    //         item.quantity = 0;
    //         item.stock = 10;
    //     })
    //     setCart([])
    // }

    return (
        <CartContextProvider>
            <div>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:id" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path={"*"} element={<Error404 />} />
                        <Route path="/cartWidget" element={<ItemListCart />} />
                    </Routes>
                </Router>
                <Footer />
            </div>
        </CartContextProvider>      
    );
}

export default App;