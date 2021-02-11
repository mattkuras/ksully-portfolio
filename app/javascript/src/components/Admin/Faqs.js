import React, { useState, useEffect } from 'react';
import './Faqs.css'
import Axios from 'axios'
import Header from './Header'

const Faqs = () => {
 
    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        Axios.get('/faqs')
            .then(resp => setFaqs(resp.data))
    }, [])


    const QAndA = () => {
        return <div className='faqs'>
            <h1 className='faq-header'>FAQ's</h1>
            {faqs.map((faq) => (
                <div key={faq.id} id={faq.id}className='q-a'>
                    <textarea className='question'  onChange={handleChange(index)} value={faq.question}></textarea>
                    <textarea className='answer' onChange={handleChange(index)} value={faq.answer}  ></textarea>
                    <button id={faq.id} type='submit'  onClick={handleSubmit}/>
                </div>
            ))}
        </div>
    }

    
const handleChange = (index) => (e) => {

    console.log(index);
    let newArr = [...faqs]; // copying the old datas array
    // newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to

    // setDatas(newArr); // ??
}

    // const handleQuestionChange = (e) => {
    //     let needsUpdate = faqs.find(f => f.id == e.target.parentElement.id)
    //     // const found = array1.find(element => element > 10);
    //     setFaqs(prevState => ([
    //         ...prevState,
            
    //     ]))
    //     setFaqs(prevState => ({
    //         ...prevState,           // copy all other field/objects
    //         message: {              // recreate the object that contains the field to update
    //           ...prevState.message, // copy all the fields of the object
    //           text: 'My message'    // overwrite the value of the field to update
    //         }
    //       }));
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        let question = e.target.parentNode.childNodes[0].innerHTML
        let answer = e.target.parentNode.childNodes[1].innerHTML
        let id = e.target.id
        let faq = {answer, question, id}
        console.log(e.target.parentNode.childNodes[0].innerHTML)

        // Axios.patch(`/faqs/${id}`, { faq }, { withCredentials: true })
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => console.log('api errors:', error))

    };

    return (
        <div className='faq-container'>
            <Header />
            <div className='faq-content'>
                <QAndA />
            </div>
        </div>
    )

}
export default Faqs 
