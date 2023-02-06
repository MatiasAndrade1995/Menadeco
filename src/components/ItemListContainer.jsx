const ItemListContainer = (prop) => {
    return (
        <div className="text-center ItemListContainer">
            <button type="button" className="btn btn-secondary">{prop.greeting}</button>
        </div>
    )
}

export default ItemListContainer;