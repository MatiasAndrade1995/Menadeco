import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ThankYou from "./components/ThankYou";
import ItemListCart from "./components/ItemListCart";
import CartContextProvider from "./components/context/Context";
import CheckOut from "./components/CheckOut";

function App() {
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
                        <Route path="/CheckOut" element={<CheckOut />} />
                        <Route path="/ThankYou" element={<ThankYou />} />
                    </Routes>
                </Router>
                <Footer />
            </div>
        </CartContextProvider>
    );
}

export default App;