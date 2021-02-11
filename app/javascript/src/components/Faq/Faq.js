import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.js'
import './Faq.css'
import Axios from 'axios'


const Faq = () => {
    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        Axios.get('/faqs/index')
            .then(resp => setFaqs(resp.data))
    }, [])

    const QAndA = () => {
        return <div className='faqs'>
            <h1 className='faq-header'>FAQ's</h1>
            {faqs.map((faq) => (
                <div className='q-a'>
                    <h1 className='question'>{faq.question}</h1>
                    <p className='answer'>{faq.answer}</p>
                </div>
            ))}
        </div>
    }


    return (
        <div className='faq-container'>

            <div className='faq-content'>
                <Navbar />
                <QAndA/>
            </div>
            <Footer />
        </div>
    );
}

export default Faq;