import React from "react"
import "./Footer.css"
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {SiVsco} from "react-icons/si"


const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                 <a href="https://www.instagram.com/kylesullivanvisual/" rel="noreferrer noreopener" target="_blank"><FaInstagram className="icon" alt="Instagram" /></a>
                 <a href="https://www.youtube.com/channel/UC8ECM4_4Aepqi-GhXJ5vXfA/videos" rel="noreferrer noreopener" target="_blank"><FaYoutube className="icon" alt="Youtube" /></a>
                 <a href="https://vsco.co/kylesullivanphotography/gallery" rel="noreferrer noreopener" target="_blank"><SiVsco className="icon" alt="VSCO" /></a>
            </div>
        </footer>
    )
}

export default Footer