import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"
import { loadStripe } from "@stripe/stripe-js"
import "./Shop.css"
import "./ShowProduct.css"
import Backdrop from '../backdrop/backdrop.js'
import Footer from "../Footer/Footer"
// import ShowProduct from "./ShowProduct"
const stripePromise = loadStripe('pk_test_51I73MsKw5OX78tFumdDo0CLhysi8WPejrlcjAjqIvYRo1dAOAr0kFGiFXVUXph8T2RXjv6ikYWCZyKKLDt7Fhj6t00DTnSFBMD')


function Shop() {
  const [productList, setProductList] = useState([]);
  const [showOpen, setShowOpen] = useState(false)
  const [showProductInfo, setShowProductInfo] = useState({})
  const [showProductSize, setShowProductSize] = useState("small")


  useEffect(() => {
    const response = fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProductList(data));
  }, [])

  const handleSizeChange = (e) => {
    const option = e.target
    option.classList.add("selected")
   setShowProductSize(e.target.id)
  }

  const handleShowProduct = async (e) => {
    showPageClickHandler()
    let productId = e.target.id
  
   const response = await fetch(`http://localhost:3000/products/${productId}`)
   .then(response => response.json())
   .then(data => setShowProductInfo(data));
  }

  const ShowProduct = () => {

    return (
      <div className="show-product-card">
        <div className="show-product-image">
          <h1>{showProductInfo.name}</h1>
           <img src={showProductInfo.image_url} />
        </div>
         <div className="show-product-info">
         <AiOutlineClose onClick={backdropClickHandler} className="close-icon" />
            <h1 className="show-product-header">Order Details</h1>
            <div className="size-selectors">
            <h2 className="select-option" onClick={handleSizeChange} id="small">8.5 X 11</h2>
              <h2 className="select-option" onClick={handleSizeChange} id="large">13 X 19</h2>
            </div>
            {showProductSize == "small" ? <h2>Price: $100.00</h2>  : <h2>Price: $200.00</h2>}
            <button onClick={handleClick} className="check-button">Buy Print</button>
          </div>
      </div>
    )
  }

 

  const Gallery = () => {
    return <section className="products">
       {productList.map((product, index) => (
         <div id={product.id} key={product.name} className="product-card" onClick={handleShowProduct}> 
              <img src={product.image_url} />
        </div>
       ))}
        </section>
     }
 

  const handleClick = async (e) => {
    // dummy data for request
    const index = e.target.value

    const charge = {
      name: showProductInfo.name,
      image: showProductInfo.image_url,
      unit_amount: showProductInfo.price,
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

  const showPageClickHandler = () => {
    setShowOpen(true)
  }
  const backdropClickHandler = () => {
    setShowOpen(false)
  }
  let backdrop;

  if (showOpen) {
    backdrop = <Backdrop close={backdropClickHandler} />
  }

  return (

    <div className="shop-page-container">
      {showOpen && ShowProduct != undefined ? <ShowProduct/> : null }
    <div className="shop-page-content">
    <h1 className="shop-header">Kyle Sullivan Visual</h1>
      <Gallery />
  </div>
  <Footer />
  {backdrop}
  </div>
  );
}

export default Shop;
