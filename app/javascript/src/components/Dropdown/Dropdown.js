import React from 'react'
import './Dropdown.css'

const Dropdown = props => (
    <div className='dropdown' onClick={props.close}>
            <a>Homepage</a>
            <a>Contact</a>
            <a>FAQs</a>
            <a>Gallery</a>
        </div>
)

export default Dropdown