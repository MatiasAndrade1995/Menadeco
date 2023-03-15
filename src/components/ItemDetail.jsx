import ItemStock from "./ItemStock";

const ItemDetail = ({ item }) => {
    return (
        <div className="container ItemDetailContainer my-2">
            <h2 className="text-center">{item.name}</h2>
            <img className="my-3 imageDetail shadow p-2 mb-5 bg-white rounded" src={item.image} alt={item.name} />
            <h4 className="center-block bg-primary text-white classPrice"> ${item.price}</h4>
            <p className="classDescription">{item.description}</p>
            <ItemStock item={item} />
        </div>
    )
}

export default ItemDetail;