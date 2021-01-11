import React, { useState } from "react"
import "./Admin.css"


const Admin = () => {
    const [productImage, setProductImage] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault()
        createProduct()
    }

   const createProduct = async () => {

    let product = {
        name: productName,
        image: productImage,
        price: productPrice,
        category: productCategory
      }
        
        const response = await fetch('/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product) // body data type must match "Content-Type" header
        }).then(console.log(response));
        return response.json(); // parses JSON response into native JavaScript objects
      }
      
    //   postData('https://example.com/answer', { answer: 42 })
    //     .then(data => {
    //       console.log(data); // JSON data parsed by `data.json()` call
    //     });

    return (
        <div className="admin-page-container">
            <h1>Admin Dashboard</h1>
            <form onSubmit={handleFormSubmit} className="product-form">
                <input value={productImage} onChange={e => setProductImage(e.target.value) } className="product-info" type="file" />
                <input value={productName} onChange={(e) => setProductName(e.target.value) }  className="product-info" type="text" placeholder="Enter Product Name Here" />
                <input value={productPrice} onChange={e => setProductPrice(e.target.value) }  className="product-info" type="text" placeholder="Enter Product Price Here" />
                <select value={productCategory} onChange={e => setProductCategory(e.target.value) }  className="product-info">
                    <option default>Choose a category</option>
                    <option>Winter</option>
                    <option>Summer</option>
                    <option>Fall</option>
                    <option>Spring</option>
                    <option>Other</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Admin