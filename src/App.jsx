import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListCart from "./components/ItemListCart";
import CartContextProvider from "./components/context/Context";
import Formulario from "./components/Formulario";




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
                        <Route path="/Formulario" element={<Formulario/>}/>
                    </Routes>
                </Router>
                <Footer />
            </div>
        </CartContextProvider>      
    );
}

export default App;