import React from 'react';
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.js'
import './Faq.css'


const Faq = () => {

    return (
        <div className='faq-container'>

            <div className='faq-content'>
                <Navbar />
                <div className='faqs'>
                    <h1 className='faq-header'>FAQ's</h1>
                    <div className='q-a'>
                        <h1 className='question'>Who am I?</h1>
                        <p className='answer'>My name is Kyle Sullivan. I’m a freelance photographer/videographer based in New Jersey, with an associates degree in Graphic Design. </p>
                    </div>
                    <div className='q-a'>
                        <h1 className='question'>What do I offer?</h1>
                        <p className='answer'>I offer high quality photography/videography work of all kinds (aerial/drone, portraits, weddings, sports, real estate, travel, etc.)
                            as well as high quality photo prints shipped to your door, check out my shop for more....</p>
                    </div>
                    <div className='q-a'>
                        <h1 className='question'>Gear list? </h1>
                        <p className='answer'>
                            Camera Body: Sony a6000<br />
                            Lens: Sony 18-105mm F4 / Sony 50mm F1.8<br />
                            Stabilizer: Zhiyun crane<br />
                            Drone: DJI Mavic Air<br />
                            GoPro Hero 9 + dome port </p>
                    </div>
                    <div className='q-a'>
                        <h1 className='question'>What are the photos printed on? </h1>
                        <p className='answer'>Each photo is printed from a Canon Pixma Pro-100 photo printer and has two size options
                            8.5”x11” - Epson Ultra Premium Photo Paper Luster or 13”x19” - Canon Pixma Photo Paper Plus Semi-Gloss</p>
                    </div>
                    <div className='q-a'>
                        <h1 className='question'>Do you do custom prints? </h1>
                        <p className='answer'>Yes, I can do custom prints upon request, please contact me for more details. 
                        Email- Kylesullivan738@gmail.com Call/Text- (732) 608-4072</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Faq;