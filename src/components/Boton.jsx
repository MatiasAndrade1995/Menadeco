import { useNavigate } from "react-router-dom";

const Boton = ({ greeting }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/products")
    }
    return (
        <div className="text-center boton">
            <button onClick={handleClick} type="button" className="btn btn-secondary ">{greeting}</button>
        </div>
    )
}

export default Boton;

