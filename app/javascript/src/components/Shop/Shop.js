import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {SiVsco} from "react-icons/si"
import { loadStripe } from "@stripe/stripe-js"
import "./Shop.css"
import "./ShowProduct.css"
import Backdrop from '../backdrop/backdrop.js'
// import ShowProduct from "./ShowProduct"
const stripePromise = loadStripe('pk_test_51I73MsKw5OX78tFumdDo0CLhysi8WPejrlcjAjqIvYRo1dAOAr0kFGiFXVUXph8T2RXjv6ikYWCZyKKLDt7Fhj6t00DTnSFBMD')


function Shop() {
  const [productList, setProductList] = useState([]);
  const [showOpen, setShowOpen] = useState(false)
  const [showProductInfo, setShowProductInfo] = useState()
  // const [showProductId, setShowProductId] = useState()


  useEffect(() => {
    const response = fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProductList(data));
  }, [])

  const showProduct = async (e) => {
    showPageClickHandler()
   let productId = e.target.value;
  
   const response = fetch(`http://localhost:3000/products/${productId}`)
   .then(response => response.json())
   .then(data => console.log(data));
  }

  const ShowProduct = () => {
          <div className="show-product-card">
           <img src={showProductInfo.image_url} />
           <div className="show-product-info">
                <h3>{showProductInfo.name}</h3>
                <h3>{showProductInfo.price}</h3>
                <h3>Buy Now</h3>
           </div>
        </div>
  }

  const Gallery = () => {
    return <section className="products">
       {productList.map((product, index) => (
         <div key={product.name} className="product-card" onClick={showProduct}>
           <div className="product-image">
              <img src={product.image_url} />
          </div>
          <div className="product-info">
               <h2 className="product-title">{product.name}</h2>
               <h4 className="product-price">${product.price/100}.00</h4>
               <button value={product.id} onClick={showProduct} id="checkout-button">Buy Canvas</button>

          </div>
        </div>
       ))}
        </section>
     }
 

  const handleClick = async (e) => {
    // dummy data for request
    const index = e.target.value

    const charge = {
      name: productList[index].name,
      image: productList[index].image_url,
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

  const showPageClickHandler = () => {
    setShowOpen(true)
  }
  const backdropClickHandler = () => {
    setShowOpen(false)
    console.log('clicked')
  }
  let backdrop;

  if (showOpen) {
    backdrop = <Backdrop close={backdropClickHandler} />
  }

  return (

    <div className="shop-page-container">
      {showOpen ? <ShowProduct/> : null }
    <div className="shop-page-content">
    <h1 className="shop-header">Kyle Sullivan Visual</h1>
  <section className="products">
      <Gallery />
  </section>
  </div>
  <footer>
      <div className="social-icons">
        <a href="https://www.instagram.com/kylesullivanvisual/" rel="noreferrer noreopener" target="_blank"><FaInstagram className="icon" alt="Instagram" /></a>
        <a href="https://www.youtube.com/channel/UC8ECM4_4Aepqi-GhXJ5vXfA/videos" rel="noreferrer noreopener" target="_blank"><FaYoutube className="icon" alt="Youtube" /></a>
        <a href="https://vsco.co/kylesullivanphotography/gallery" rel="noreferrer noreopener" target="_blank"><SiVsco className="icon" alt="VSCO" /></a>
      </div>
      <div className="footer-links">
      <Link className="footer-link" to="/"><h3>FAQs</h3></Link>
      <h3 className="footer-link">Contact:<br/>kylesullivanvisual@gmail.com</h3>
      </div>
  </footer>
  {backdrop}
  </div>
  );
}

export default Shop;
