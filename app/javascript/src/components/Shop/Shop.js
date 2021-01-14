import React, { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import "./Shop.css"
const stripePromise = loadStripe('pk_test_51I73MsKw5OX78tFumdDo0CLhysi8WPejrlcjAjqIvYRo1dAOAr0kFGiFXVUXph8T2RXjv6ikYWCZyKKLDt7Fhj6t00DTnSFBMD')


const Shop = () => {
    const [productList, setProductList] = useState([])
    const [showProduct, setShowProduct] = useState()

  useEffect(() => {
    const response = fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => setProductList(data));
  }, [])

  const initializeShowProduct = async (e) => {
      const response = await fetch(`/products/${e.target.value}`)
      .then(response => response.json())
      .then(data => console.log(data))
      setShowProduct(response.data)
      enlargeImage()
  }

  const enlargeImage = () => {
    console.log(showProduct)
  }

  const Gallery = () => {
    console.log(productList)
    return <section className="products">
       {productList.map((product, index) => (
         <div key={product.name} className="product-card">
           <div className="product-image">
              <img src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2019/01/zakynthos-JPEG.jpg?fit=1920%2C1080&ssl=1" />
          </div>
          <div className="product-info">
               <h2 className="product-title">{product.name}</h2>
               <h4 className="product-price">${product.price/100}.00</h4>
               <button value={index} onClick={handleClick} className="checkout-button">Buy Now</button>
               <button value={product.id} onClick={initializeShowProduct} className="button enlarge-btn">Enlarge Image</button>
          </div>
        </div>
       ))}
        </section>
     }

  const handleClick = async (e) => {

    const index = e.target.value

    const charge = {
      name: productList[index].name,
      unit_amount: productList[index].price,
      quantity: 1
    }

    //Get Instance of Stripe
    const stripe = await stripePromise;

    //Calling backend to create Checkout Session
    const response = await fetch('/charges/create', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(charge)
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert("Something went wrong, check the console")
      console.log(result.error)
    }
  
  }

  return (
    <div className="shop-page-container">
    <div className="shop-page-content">
    <nav className="product-filter">
    <h1>Kyle Sullivan Visual</h1>
      <div className="collection-sort">
        <label>Categories:</label>
        <select>
          <option value="/">All Photos</option>
        </select>
      </div>
  </nav>
    <Gallery />
  </div>
  </div>
  );
}

export default Shop;
