import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {SiVsco} from "react-icons/si"
import { loadStripe } from "@stripe/stripe-js"
import "./Shop.css"

const stripePromise = loadStripe('pk_test_51I73MsKw5OX78tFumdDo0CLhysi8WPejrlcjAjqIvYRo1dAOAr0kFGiFXVUXph8T2RXjv6ikYWCZyKKLDt7Fhj6t00DTnSFBMD')


function Shop() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const response = fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => setProductList(data));
  }, [])

  const Gallery = () => {
    console.log(productList)
    return <section className="products">
       {productList.map((product, index) => (
         <div key={product.name} className="product-card">
           <div className="product-image">
              <img src={product.image_url} />
          </div>
          <div className="product-info">
               <h2 className="product-title">{product.name}</h2>
               <h4 className="product-price">${product.price/100}.00</h4>
               <button value={index} onClick={handleClick} id="checkout-button">Buy Now</button>

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
    {/* <nav className="product-filter"> */}
    <h1 className="shop-header">Kyle Sullivan Visual</h1>
      {/* <div className="collection-sort">
        <label>Categories:</label>
        <select>
          <option value="/">All Photos</option>
        </select>
      </div> */}
  {/* </nav> */}

  <section className="products">
      <Gallery />
  </section>
  </div>
  <footer>
      <div className="social-icons">
      <FaInstagram className="icon" alt="Instagram" />
      <FaYoutube className="icon" alt="Youtube" />
      <SiVsco className="icon" alt="VSCO" />
      </div>
      <div className="footer-links">
      <Link className="footer-link" to="/"><h3>FAQs</h3></Link>
      <h3 className="footer-link">Contact:<br/>kylesullivanvisual@gmail.com</h3>
      </div>
  </footer>
  </div>
  );
}

export default Shop;
