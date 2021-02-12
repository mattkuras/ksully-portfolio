import React, { useState } from 'react';
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.js'
import './Contact.css'
import axios from 'axios'

const Contact = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [messageSent, setMessageSent] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        let message = {
            email: email,
            first_name: firstName,
            last_name: lastName,
            subject: subject,
            content: content
        }
        axios.post('/messages', { message }, { withCredentials: true })
            .then(response => {
                console.log(response)
                if (response.statusText == "OK"){
                    setMessageSent(true)
                }
                else {console.log('errrrorrrrr') }
            })
            .catch(error => console.log('api errors:', error))
            setContent('')
            setEmail('')
            setFirstName('')
            setLastName('')
            setSubject('')
    };

    let ok
    const renderOk = () => {
        return(
        <div className='message-sent'>
           <p> Your message was sent!</p>
        </div>
    )}

    return (
        <div className='contact-container'>
            <div className='contact-content'>
                <Navbar />
                <div className='contacts'>
                    <h1 className='contact-header'>Get in touch</h1>
                    <p className='contact-message'>For any inquiries, questions, comments, or concerns please contact me at kylesullivan738@gmail.com<br/>
                    Or feel free to drop a message below</p>
                </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-container dub">
                    <input className="input split" type="text" placeholder="First Name" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input className="input split" type="text" placeholder="Last Name" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="input-container">
                    <input className="input" type="text" placeholder="Enter Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-container">
                    <input className="input" type="text" placeholder="Subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className="input-container">
                    <textarea className="input"  placeholder="Type here" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <input type="submit" className='submit' />
                {messageSent ? renderOk() : null}
            </form>
            
            <Footer />
        </div>
    );
}

export default Contact;