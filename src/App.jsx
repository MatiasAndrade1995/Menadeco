import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Reservá tus productos aquí"} />
      <Footer />
    </div>
  );
}

export default App;