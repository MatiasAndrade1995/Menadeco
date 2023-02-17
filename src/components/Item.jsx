import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="card border-0 d-flex justify-content-center">
            <h2>{item.name}</h2>
            <div className="containerImageProduct">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                    <img src={item.image} className="rounded mx-auto w-50 shadow p-2 mb-2 bg-white rounded" alt={item.name} />
                </Link>
            </div>
            <div className="card-body text-center">
                <h4 className="card-title classPrice bg-primary text-white">${item.price}</h4>
            </div>
        </div>
    )
}

export default Item;