import React, {useEffect, useState} from "react"
import "./ShowProduct.css"

const ShowProduct = (props) => {

    const [showProductInfo, setShowProductInfo] = useState()

useEffect (() => {
    const response = fetch(`http://localhost:3000/products/${props.id}`)
    .then(response => response.json())
    .then(data => setShowProductInfo(data));
})

    return (
        <div className="show-product-card">
           <img src={showProductInfo.image_url} />
           <div className="show-product-info">
                <h3>{showProductInfo.name}</h3>
                <h3>{showProductInfo.price}</h3>
                <h3>Buy Now</h3>
           </div>
        </div>
    )
}

export default ShowProduct;