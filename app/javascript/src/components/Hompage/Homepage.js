import React from "react"
import '../../App.css';
import {Link} from "react-router-dom"

function Homepage() {
    console.log("HELLO HOME PAGE")
  return (
    <div className="container">
        <h1 className="title">Kyle Sullivan Visual<span>&copy;</span></h1>
        <a href="https://vsco.co/kylesullivanphotography/gallery" rel="noreferrer noreopener" target="_blank"  className="link"><h1 className="link-item">Photos</h1></a>
        <a href="https://www.youtube.com/channel/UC8ECM4_4Aepqi-GhXJ5vXfA/videos" rel="noreferrer noreopener" target="_blank"  className="link"><h1 className="link-item">Videos</h1></a>
        <Link className="link" to="/shop"><h1 className="link-item">Shop</h1></Link>
    </div>
  );
}

export default Homepage;