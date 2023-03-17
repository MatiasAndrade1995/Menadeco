import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="container-fluid p-3 bg-secondary text-white footer mt-5">
            <div className="row">
                <a className="text-center" target="_blank" rel="noreferrer" href="https://www.instagram.com/menadeco/">
                    <p><BsInstagram /></p>
                    <p className="menadeco">MENADECO</p>
                </a>
                <p className="text-center mt-3">Contactanos: mena.deco14@gmail.com</p>
                <p className="text-center">COPYRIGHT MENADECO - 2023. TODOS LOS DERECHOS RESERVADOS. </p>
            </div>
        </div>
    )
}
export default Footer;