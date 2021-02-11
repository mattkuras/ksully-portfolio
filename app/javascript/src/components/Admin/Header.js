import React, { useState} from 'react';
import { Link } from "react-router-dom"

import './Header.css'

const Header = (props) => {


    return ( 
        <div className="header">
                <a href='/admindashboard'><h2 className="header-item">Admin Dashboard</h2></a>
                <div className="header-links">
                    <Link className="link header-item" to="/shop"><h1>Go To Shop</h1></Link>
                    <Link className="link header-item" to="/faq"><h1>FAQS</h1></Link>
                    <Link className="link header-item" to="/admin/messages"><h1>Messages</h1></Link>
                    <Link className="link header-item" to="/admin" onClick={props.logout}><h1 >Logout</h1></Link>
                </div>
            </div>
     );
}
 
export default Header;