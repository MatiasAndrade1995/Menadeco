import albumRosa from "./images/productos/paraCarrousel/albumRosa.jpg"
import perchero from "./images/productos/paraCarrousel/perchero.jpg"
import morado from "./images/productos/paraCarrousel/morado.jpg";
import productos from "./images/productos/paraCarrousel/productos.jpg";
import Carousel from 'react-bootstrap/Carousel';

function MyCarousel() {
    return (
        <div className="container">
            <Carousel className="MyCarousel">
                <Carousel.Item className="carouselItem">
                <img
                    className="d-block w-100"
                    src={albumRosa}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Albumnes personalizados.</h3>
                    <p>¡Albumnes de la temática que quieras!</p>
                </Carousel.Caption>
            </Carousel.Item>
                <Carousel.Item className="carouselItem">
                <img
                    className="d-block w-100"
                    src={perchero}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Percheros</h3>
                        <p>Excelentes percheros para completar tu hogar.</p>
                </Carousel.Caption>
            </Carousel.Item>
                <Carousel.Item className="carouselItem">
                <img
                    className="d-block w-100"
                    src={morado}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Cuadros personalizados</h3>
                    <p>
                        Los cuadros mas lindos personalizados.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <img
                        className="d-block w-100"
                        src={productos}
                        alt="Third slide"
                    />
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