import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import { loadStripe } from "@stripe/stripe-js"
import "./Shop.css"
import "./ShowProduct.css"
import Backdrop from '../backdrop/backdrop.js'
import Dropdown from "../Dropdown/Dropdown.js"
import Footer from "../Footer/Footer"
import header from "./header.png"
const stripePromise = loadStripe('pk_live_51IB1JNFNqePL7pa3xw2MueUlJf4hm7ROUVT9TcxBSZa1Bjw4P7fXISfvqFf3jNs5qi4oREGiN9hlA82RBqf4QXyj000Zd8UWD7')


function Shop() {
  const [productList, setProductList] = useState([]);
  const [showOpen, setShowOpen] = useState(false)
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const [showProductInfo, setShowProductInfo] = useState({})
  const [showProductSize, setShowProductSize] = useState("small")
  const [productPrice, setProductPrice] = useState(35)


  useEffect(() => {
    const response = fetch('/products')
      .then(response => response.json())
      .then(data => setProductList(data));
  }, [])

  const scrollUp = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  const handleSizeChange = (e) => {
    const option = e.target
    if(e.target.id === "small"){
      setProductPrice(35)
    } else {
      setProductPrice(50)
    }
   setShowProductSize(e.target.id)
  }

  const setSelected = (e) => {
    const option = e.target
    console.log(option)
    option.classList.add("selected")
  }

  const removeSelected = (e) => {
    const option = e.target
    console.log(option)
    option.classList.remove("selected")
  }

  const handleShowProduct = async (e) => {
    showPageClickHandler()
    let productId = e.target.id
  
   const response = await fetch(`/products/${productId}`)
   .then(response => response.json())
   .then(data => setShowProductInfo(data));
  }

  const ShowProduct = () => {

    return (
      <div className="show-product-card">
        <div className="show-product-image">
           <img src={showProductInfo.image_url} />
        </div>
         <div className="show-product-info">
         <AiOutlineClose onClick={backdropClickHandler} className="close-icon" />
            <h1 className="show-product-header">Order Details</h1>
            {/* <h1 className="product-name">{showProductInfo.name}</h1>  */}
            <ul>
              <li className="product-details">High quality print of photo taken by Kyle Sullivan.</li>
              <li className="product-details">Comes in two sizes: 8.5 x 11 or 13 x 19 (Choose below)</li>
              <li className="product-details">Free shipping anywhere in the US and Canada.</li>
            </ul>
            <div className="size-selectors">
              <input type="button" className="select-option" onFocus={setSelected} onBlur={removeSelected} onClick={handleSizeChange} id="small" value="8.5 X 11"/>
              <input type="button" className="select-option" onFocus={setSelected} onBlur={removeSelected} onClick={handleSizeChange} id="large" value="13 X 19"/>
            </div>
            {showProductSize == "small" ? <h2 className="price">Price: $35.00</h2>  : <h2 className="price">Price: $50.00</h2>}
            <button onClick={handleClick} className="check-button">Buy Print</button>
          </div>
      </div>
    )
  }

 

  const Gallery = () => {
    return <section className="products">
       {productList.map((product, index) => (
         <div onClick={scrollUp()} id={product.id} key={product.name} className="product-card" onClick={handleShowProduct}> 
              <img onClick={scrollUp()} src={product.image_url} />
        </div>
       ))}
        </section>
     }
 

  const handleClick = async (e) => {

    const charge = {
      name: showProductInfo.name,
      image: showProductInfo.image_url,
      unit_amount: productPrice * 100,
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

  let dropDown;

  const dropDownClickHandler = () => {
    setDropDownOpen(true)
  }

  if(dropDownOpen) {
    dropDown = <Dropdown />
  }

  return (

    <div className="shop-page-container">
      {showOpen && ShowProduct != undefined ? <ShowProduct/> : null }
    <div className="shop-page-content">
      <nav className="navbar">
        <button className="drop-down-btn"><GiHamburgerMenu onClick={dropDownClickHandler} className="drop-down-icon" /></button>
        <div className="nav-links">
            <a href='/'>Homepage</a>
            <a>Contact</a>
            <a>FAQs</a>
            <a href='/shop'>Shop</a>
        </div>
        <div>
          <a href='/'><h1 className="shop-header">Kyle Sullivan Visual</h1></a>
        </div>
      </nav>
    <h3 className="call-to-action">Buy High Quality Prints Below</h3>
      <Gallery />
  </div>
  <Footer />
  {dropDown}
  {backdrop}
  </div>
  );
}

export default Shop;
