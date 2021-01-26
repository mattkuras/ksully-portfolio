import React from "react"
import "./Homepage.css"
import {Link} from "react-router-dom"
import {FiCamera} from "react-icons/fi"
import {FiVideo} from "react-icons/fi"
import {AiOutlineShop} from "react-icons/ai"

function Homepage() {
  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="fadein">
            <img className="bg-image" id="f3" src="https://st2.depositphotos.com/2435561/5260/i/600/depositphotos_52604175-stock-photo-sunrise-at-bear-rocks-preserve.jpg" />
            <img className="bg-image" id="f2" src="https://thumbs-prod.si-cdn.com/vK2O9P0KmbxGU1Wzx5H_CWQwSyA=/fit-in/1600x0/https://public-media.si-cdn.com/filer/f1/3d/f13dfc6b-d62c-4f0e-b178-4edc81996a3b/lost_in_the_wilderness-main.jpg" />
            <img className="bg-image" id="f1" src="https://media.istockphoto.com/photos/colorful-panoramic-mountain-view-at-sunrise-picture-id1129473522?k=6&m=1129473522&s=612x612&w=0&h=qWamgIiqOoQXs3aDZm7U3rxzuOlN9lXNIxyq6QskPaE=" /> 
        </div>
        <h1 className="title content">Kyle Sullivan Visual<span>&copy;</span></h1>
        <div className="icon-container">
        <a href="https://vsco.co/kylesullivanphotography/gallery" rel="noreferrer noreopener" target="_blank"  className="home-link content"><FiCamera className="home-link-item"/></a>
        <a href="https://www.youtube.com/channel/UC8ECM4_4Aepqi-GhXJ5vXfA/videos" rel="noreferrer noreopener" target="_blank"  className="home-link content"><FiVideo className="home-link-item"/></a>
        <Link className="home-link content" to="/shop"><AiOutlineShop className="home-link-item"/></Link>
        </div>
    </div>
  );
}

export default Homepage;