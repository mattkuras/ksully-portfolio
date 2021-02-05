import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer.js'
import { Link } from "react-router-dom"
import './Messages.css'


const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const response = fetch('/messages')
            .then(response => response.json())
            .then(data => setMessages(data));
    }, [])

    // const MessageList = () => {
    //     return <section>
    //         {messages.map((message) => (
    //             <div key={message.id} className='message'>
    //                 <h1 className='name'>{message.full_name}</h1>
    //                 <h1 className='email'>{message.email}</h1>
    //                 <h1 className='subject'>{message.subject}</h1>
    //                 {/* <p className='content'> {message.content}</p> */}
    //             </div>
    //         ))
    //         }
    //     </section>
    // }

    const MessageList = () => {
        return <div className='message-table'>
            {messages.map((message) => (
                <div key={message.id} className='message'>
                    <div className='email'>{message.email}</div>
                    <div className='subject'>{message.subject} {message.content}</div>
                </div>
            ))
            }
        </div>
    }


    return (
        <div className='messages-container'>
            <div className="header">
                <a href='/admindashboard'><h2 className="header-item">Admin Dashboard</h2></a>
                <div className="header-links">
                    <Link className="link header-item" to="/shop"><h1>Go To Shop</h1></Link>
                    <Link className="link header-item" to="/admin"><h1 onClick={console.log('clicked')}>Logout</h1></Link>
                    <Link className="link header-item" to="/admin/messages"><h1>Messages</h1></Link>
                </div>
            </div>
            <div className='messages-content'>
                <div className='messages'>
                    <h1 className='messages-header'>Messages</h1>
                    <MessageList />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Messages;