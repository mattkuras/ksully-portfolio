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
                        <h1 className='question'>How long does shipping take?</h1>
                        <p className='answer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus diam nec augue ornare imperdiet feugiat vel felis. Mauris gravida metus augue, eget pulvinar erat auctor eu. Cras ac turpis quis tortor consectetur facilisis sed non diam. Duis ut rutrum sem. Fusce a ornare nulla. Morbi vehicula pulvinar diam vitae luctus. Duis tristique quam nulla, ac commodo justo placerat ac. Suspendisse in justo mollis, sollicitudin justo ut, malesuada neque. Proin eget nisl dui. Sed eget condimentum risus, a vehicula justo. Nam lacinia consequat dapibus. Sed dolor neque, pulvinar in feugiat et, viverra ac est. Mauris accumsan felis vel ex pretium, id suscipit ligula congue. Integer auctor eu lorem at feugiat.</p>
                    </div>
                    <div className='q-a'>
                        <h1 className='question'>What are the photos printed on?</h1>
                        <p className='answer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus diam nec augue ornare imperdiet feugiat vel felis. Mauris gravida metus augue, eget pulvinar erat auctor eu. Cras ac turpis quis tortor consectetur facilisis sed non diam. Duis ut rutrum sem. Fusce a ornare nulla. Morbi vehicula pulvinar diam vitae luctus. Duis tristique quam nulla, ac commodo justo placerat ac. Suspendisse in justo mollis, sollicitudin justo ut, malesuada neque. Proin eget nisl dui. Sed eget condimentum risus, a vehicula justo. Nam lacinia consequat dapibus. Sed dolor neque, pulvinar in feugiat et, viverra ac est. Mauris accumsan felis vel ex pretium, id suscipit ligula congue. Integer auctor eu lorem at feugiat.</p>
                    </div>
                    <div className='q-a'>
                        <h1 className='question'>Do you do custom prints?</h1>
                        <p className='answer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus diam nec augue ornare imperdiet feugiat vel felis. Mauris gravida metus augue, eget pulvinar erat auctor eu. Cras ac turpis quis tortor consectetur facilisis sed non diam. Duis ut rutrum sem. Fusce a ornare nulla. Morbi vehicula pulvinar diam vitae luctus. Duis tristique quam nulla, ac commodo justo placerat ac. Suspendisse in justo mollis, sollicitudin justo ut, malesuada neque. Proin eget nisl dui. Sed eget condimentum risus, a vehicula justo. Nam lacinia consequat dapibus. Sed dolor neque, pulvinar in feugiat et, viverra ac est. Mauris accumsan felis vel ex pretium, id suscipit ligula congue. Integer auctor eu lorem at feugiat.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Faq;