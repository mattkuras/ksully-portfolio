import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {SiVsco} from "react-icons/si"
import { loadStripe } from "@stripe/stripe-js"
import "./Shop.css"
import Backdrop from '../backdrop/backdrop.js'
const stripePromise = loadStripe('pk_test_51I73MsKw5OX78tFumdDo0CLhysi8WPejrlcjAjqIvYRo1dAOAr0kFGiFXVUXph8T2RXjv6ikYWCZyKKLDt7Fhj6t00DTnSFBMD')


function Shop() {
  const [productList, setProductList] = useState([]);
  const [showOpen, setShowOpen] = useState(false)


  useEffect(() => {
    const response = fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProductList(data));
  }, [])

  // const showProduct = (e) => {
  //  let productId = e.target.id;
  //  axios.get("/proucts/${productId}")


  // }

  const Gallery = () => {
    console.log(productList)
    return <section className="products">
<<<<<<< HEAD
      {productList.map((product, index) => (
        <div key={product.name} className="product-card" onClick={showPageClickHandler}>
          <div className="product-image">
            <img src={product.image_url} />
            <img src="https://i.pinimg.com/originals/81/c3/3a/81c33af00010a4b7a05b3f35cb9943b9.jpg" />
          </div>
          <div className="product-info">
            <h2 className="product-title">{product.name}</h2>
            <h4 className="product-price">${product.price / 100}.00</h4>
            <button value={index} onClick={handleClick} className="checkout-button">Buy Now</button>
            {/* <button value={product.id} onClick={initializeShowProduct} className="button enlarge-btn">Enlarge Image</button> */}
          </div>
        </div>
      ))}
    </section>
=======
       {productList.map((product, index) => (
         <div key={product.name} className="product-card">
           <div className="product-image">
              <img src={product.image_url} />
          </div>
          <div className="product-info">
               <h2 className="product-title">{product.name}</h2>
               <h4 className="product-price">${product.price/100}.00</h4>
               <button value={index} onClick={handleClick} id="checkout-button">Buy Canvas</button>

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
    // image: productList[index].image_url,
    unit_amount: productList[index].price,
    quantity: 1
>>>>>>> create_payment_result_pages
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
<<<<<<< HEAD
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

        <section className="products">

          <div className="product-card">
            <div className="product-image">
              <img src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2019/01/zakynthos-JPEG.jpg?fit=1920%2C1080&ssl=1" />
            </div>
            <div className="product-info">
              <h2 className="product-title">Montego Bay</h2>
              <h4 className="product-price">$99.99</h4>
              <button onClick={handleClick} id="checkout-button">Buy Now</button>
            </div>
          </div>
          <Gallery />

        </section>
      </div>
      {backdrop}
    </div>
=======
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
  </div>
>>>>>>> create_payment_result_pages
  );
}

export default Shop;
