import React from "react"
import "./Homepage.css"
import {Link} from "react-router-dom"
import {FiCamera} from "react-icons/fi"
import {FiVideo} from "react-icons/fi"
import {AiOutlineShop} from "react-icons/ai"
import kyle_bg1 from "./kyle_bg1.jpg"
import kyle_bg5 from "./kyle_bg5.jpg"
import kyle_bg3 from "./kyle_bg3.jpg"

function Homepage() {
  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="fadein">
            <img className="bg-image" id="f3" src={kyle_bg1} />
            <img className="bg-image" id="f2" src={kyle_bg5} />
            <img className="bg-image" id="f1" src={kyle_bg3} />
        </div>
        <h1 className="title content">@KyleSullivanVisual<span>&copy;</span></h1>
        <div className="icon-container">
        <a href="https://vsco.co/kylesullivanphotography/gallery" rel="noreferrer noreopener" target="_blank"  className="home-link content"><FiCamera className="home-link-item"/></a>
        <a href="https://www.youtube.com/channel/UC8ECM4_4Aepqi-GhXJ5vXfA/videos" rel="noreferrer noreopener" target="_blank"  className="home-link content"><FiVideo className="home-link-item"/></a>
        <Link className="home-link content" to="/shop"><AiOutlineShop className="home-link-item"/></Link>
        </div>
    </div>
  );
}

export default Homepage;