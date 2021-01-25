import React from "react";
import {Link} from "react-router-dom"
import "./Success.css"
import {AiFillCloseCircle} from "react-icons/ai"
import Footer from "../Footer/Footer"

const PaymentFailure = () => {
    return (
        <div className="payment-page-content">
            <div className="icon-container">
                <AiFillCloseCircle className="failure-icon" />
            </div>
            <h2>Oops, something went wrong! Payment was not proccessed. Please go back and try again.</h2>
            <Link className="back-button" to="/shop"><p>Back To Shop</p></Link>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default PaymentFailure;