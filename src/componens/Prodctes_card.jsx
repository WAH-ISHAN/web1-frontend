
export function ProductCard(props){
    console.log(props.description)
    return(
        <div className="product-card">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.Price}</p>
            <button>Add to Card</button>
        </div>
        

    )
}