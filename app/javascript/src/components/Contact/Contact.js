import React from 'react';
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.js'
import './Contact.css'


const Contact = () => {

    return (
        <div className='contact-container'>
            <div className='contact-content'>
                <Navbar />
                <div className='contacts'>
                    <h1 className='contact-header'>Get in touch</h1>
                    <p className='contact-message'>For questions about our products, services, or whether you would like to 
                    collaborate or simply connect, please contact me at kylesullivan738@gmail.com, or complete the form below. 
                    I appreciate your patience, and look forward to connecting with you!</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;