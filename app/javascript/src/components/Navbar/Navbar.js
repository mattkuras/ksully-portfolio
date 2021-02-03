import React, { useState} from 'react';
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi"
import Dropdown from "../Dropdown/Dropdown.js"

const Navbar = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false)

    let dropDown;

    const dropDownClickHandler = () => {
        setDropDownOpen(true)
    }
    const closeDropDown = () => {
        setDropDownOpen(false)
    }

    if (dropDownOpen) {
        dropDown = <Dropdown close={closeDropDown} />
    }

    return ( 
        <nav className="navbar">
                <button className="drop-down-btn"><GiHamburgerMenu onClick={dropDownClickHandler} className="drop-down-icon" /></button>
                <div className="nav-links">
                    <a href='/'>Homepage</a>
                    <a>Contact</a>
                    <a href='/faq'>FAQs</a>
                    <a href='/shop'>Shop</a>
                </div>
                <div>
                    <a href='/'><h1 className="shop-header">Kyle Sullivan Visual</h1></a>
                </div>
            {dropDown}

            </nav>
     );
}
 
export default Navbar;