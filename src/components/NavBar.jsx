import logo from "./images/logos/logoMenadeco.png";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = ({ cart }) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center p-1 mb-2 bg-light text-dark">
                <div className="col-10 d-flex aling-items-center">
                    <nav className="navbar d-flex justify-content-between text-center">
                        <NavLink classnameactive="active" className="navbar-brand" to="/">
                            <img src={logo} width="200" alt="logoMenadeco" />{""}
                        </NavLink>
                        <NavLink className="navbar-brand" to="/">
                            INICIO
                        </NavLink>
                        <NavLink className="navbar-brand" to="/category/album">
                            ALBUMNES
                        </NavLink>
                        <NavLink className="navbar-brand" to="/category/cuadros">
                            CUADROS
                        </NavLink>
                        <NavLink className="navbar-brand" to="/category/percheros">
                            PERCHEROS
                        </NavLink>
                        <div className="d-flex containerSearch">
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Buscar producto..."
                                    aria-label="Search"
                                />
                                <button className="btn btn-secondary" type="submit">
                                    Buscar
                                </button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div className="col-1 d-flex flex-row align-items-center">
                    <NavLink className="navbar-brand" to="/cartWidget">
                        <CartWidget cart={cart} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
export default NavBar;
