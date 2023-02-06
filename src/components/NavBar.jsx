import logo from "./images/productos/logos/logoMenadeco.png"
import CartWidget from "./CartWidget";
import MyCarousel from "./MyCarousel";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center p-1 mb-2 bg-light text-dark">
                <div className="col-10 d-flex aling-items-center justify-content-between">
                    <nav className="navbar">
                        <a className="navbar-brand" href={"/"}><img src={logo} width="200" alt="logoMenadeco" /> </a>
                        <a className="navbar-brand" href={"/"}>INICIO</a>
                        <a className="navbar-brand" href={"/"}>PRODUCTOS</a>
                        <a className="navbar-brand" href={"/"}>SAN VALENTÍN</a>
                        <a className="navbar-brand" href={"/"}>ÁLBUMNES DE FIGURITAS</a>
                        <a className="navbar-brand" href={"/"}>CONTACTO</a>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Buscar producto..." aria-label="Search" />
                            <button class="btn btn-secondary" type="submit">Buscar</button>
                        </form>
                    </nav>
                </div>
                <div className="col-1 d-flex flex-row align-items-center">
                    <CartWidget />
                </div>
            </div>
            <MyCarousel/>
        </div>
    )
}

export default NavBar;