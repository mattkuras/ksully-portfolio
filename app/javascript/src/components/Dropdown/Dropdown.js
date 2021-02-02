import React from 'react'
import './Dropdown.css'
import {AiOutlineClose} from "react-icons/ai"

const Dropdown = props => (
    <div className='dropdown'>
            <AiOutlineClose className="close-dropdown" onClick={props.close} />
            <a href='/'>Homepage</a>
            <a>Contact</a>
            <a>FAQs</a>
            <a href='/shop'>Shop</a>
        </div>
)

export default Dropdown