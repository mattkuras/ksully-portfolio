import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer.js'
import { Link } from "react-router-dom"
import './Messages.css'


const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [messageShowOpen, setMessageShowOpen] = useState(false)
    const [message, setMessage] = useState({})

    useEffect(() => {
        const response = fetch('/messages')
            .then(response => response.json())
            .then(data => setMessages(data));
    }, [])

    const MessageList = () => {
        return <div className='message-table'>
            {messages.map((m) => (
                <div key={m.id} id={m.id} onClick={handleClick} className= {'message ' + (message.id == m.id ? 'selected' : 'notselected')}>
                    <div className='email'>{m.email}</div>
                    <div className='subject'>{m.subject} {m.content}</div>
                    <div className='datetime'>{m.time_or_day}</div>
                </div>
            ))
            }
        </div>
    }

    const handleClick = (e) => {
        let messageId = e.target.parentNode.id
        let showMessage = messages.filter(m => m.id == messageId)
        let { subject, email, content, full_name, time_or_day, id, datetime } = showMessage[0]
        setMessage({ subject, email, content, full_name, time_or_day, id, datetime })
        setMessageShowOpen(true)
    }

    const DisplayMessage = () => {
        return <div className='show-message'>
            <div className='message-subject'>{message.subject.toUpperCase()}</div>
            <div className='message-time'>{message.datetime}</div>
            <div className='message-sender'>{message.full_name}  ({message.email})</div>
            <div className='message-content'>{message.content}</div>
        </div>
    }


    return (
        <div className='messages-container'>
            <div className="header">
                <a href='/admindashboard'><h2 className="header-item">Admin Dashboard</h2></a>
                <div className="header-links">
                    <Link className="link header-item" to="/shop"><h1>Go To Shop</h1></Link>
                    <Link className="link header-item" to="/admin"><h1 >Logout</h1></Link>
                    <Link className="link header-item" to="/admin/messages"><h1>Messages</h1></Link>
                </div>
            </div>
            <div className='messages-content'>
                <div className='messages'>
                    <h1 className='messages-header'>Messages</h1>
                    <MessageList />
                </div>
            </div>
            {messageShowOpen && message != undefined ? <DisplayMessage /> : null}
            <Footer />
        </div>
    );
}

export default Messages;