import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import "./Shop.css"

const stripePromise = loadStripe('pk_test_51I73MsKw5OX78tFumdDo0CLhysi8WPejrlcjAjqIvYRo1dAOAr0kFGiFXVUXph8T2RXjv6ikYWCZyKKLDt7Fhj6t00DTnSFBMD')


function Shop() {

  const handleClick = async (e) => {
    //Get Instance of Stripe
    const stripe = await stripePromise;

    //Calling backend to create Checkout Session
    const response = await fetch('/create-checkout-session', {method: 'POST'});
  
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

  
</section>
  </div>
  </div>
  );
}

export default Shop;