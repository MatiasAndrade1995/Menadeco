import albumRosa from "./images/paraCarrousel/albumRosa.jpg"
import perchero from "./images/paraCarrousel/perchero.jpg"
import morado from "./images/paraCarrousel/morado.jpg";
import productos from "./images/paraCarrousel/productos.jpg";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

function MyCarousel() {

    return (
        <div className="container">
            <Carousel className="MyCarousel shadow-sm p-1 mb-5 bg-secondary rounded">
                <Carousel.Item className="carouselItem">
                    <Link to={"/category/album"}>
                        <img
                            className="d-block w-100"
                            src={albumRosa}
                            alt="First slide"
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3>Albumnes personalizados.</h3>
                        <p>¡Albumnes de la temática que quieras!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <Link to={"/category/percheros"}>
                        <img
                            className="d-block w-100"
                            src={perchero}
                            alt="Second slide"
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3>Percheros</h3>
                        <p>Excelentes percheros para completar tu hogar.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <Link to={"/category/cuadros"}>
                        <img
                            className="d-block w-100"
                            src={morado}
                            alt="Third slide"
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3>Cuadros personalizados</h3>
                        <p>
                            Los cuadros mas lindos personalizados.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <Link to={"/"}>
                        <img
                            className="d-block w-100"
                            src={productos}
                            alt="Third slide"
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3>Muchos productos mas</h3>
                        <p>
                            ¡No te los pierdas!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MyCarousel;