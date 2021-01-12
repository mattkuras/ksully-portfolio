import React, { useState } from "react"
import "./Admin.css"
import { DirectUpload } from 'activestorage';

const Admin = () => {
    const [productImage, setProductImage] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault()
        createProduct()
    }
// creates product then calls uploadfile
   const createProduct = async () => {
    let product = {
        name: productName,
        price: productPrice,
        category: productCategory
      }
        fetch('/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product) // body data type must match "Content-Type" header
        })
        .then(resp => resp.json())
        .then(data => uploadFile(productImage, data))
      }
// uploads image file from form, then sends patch request to attach file to product
      const uploadFile = (file, product) => {
        const upload = new DirectUpload(file, '/rails/active_storage/direct_uploads')
        upload.create((error, blob) => {
          if (error){
            console.log(error)
          } else {
            fetch(`/products/${product.id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            })
            .then(resp => console.log(resp))
          }
        })
      }
      

    return (
        <div className="admin-page-container">
            <h1>Admin Dashboard</h1>
            <form onSubmit={handleFormSubmit} className="product-form">
                <input onChange={e => setProductImage(e.target.files[0]) } className="product-info" type="file" />
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