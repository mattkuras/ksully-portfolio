import React from "react";
import "./Success.css"
import {AiFillCheckCircle} from "react-icons/ai"
import Footer from "../Footer/Footer"

const PaymentSuccess = () => {
    return (
        <div className="payment-page-content">
            <div className="icon-container">
                <AiFillCheckCircle className="checkmark-icon" />
            </div>
            <h1>Thanks for your purchase!</h1>
            <h4>You will receive an email confirmation for your order shortly!</h4>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default PaymentSuccess;