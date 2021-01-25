import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import "./Admin.css"
import { DirectUpload } from 'activestorage';

const Admin = (props) => {
  const [productList, setProductList] = useState([]);
    const [productImage, setProductImage] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState('');

    useEffect(() => {
      const response = fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProductList(data));
    }, [])

    const handleDelete = async (e) => {
      let id = e.target.value

      await fetch(`/products/${id}`, { method: 'DELETE' })
        .then(() => console.log('Delete successful'))
        .then(window.location.reload(false))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        createProduct()
    }

    const Gallery = () => {
      // console.log(productList)
     return<div className="product-container">
        {productList.map((product) => (
          <div key={product.name} className="product">
            <img src={product.image_url} alt="Photo"/>
            <h1>{product.name}</h1>
            <h3>Price: ${product.price/100}</h3>
            <h3>Category: {product.category}</h3>
            <div className="btn-container"> 
               <button value={product.id} onClick={handleDelete} className="btn delete-btn">Delete</button>
            </div>
            </div>
        ))}
         </div>
      }

// creates product then calls uploadfile
   const createProduct = async () => {
    let product = {
        name: productName,
        price: productPrice * 100,
        category: productCategory,
        image: productImage
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
            let signed_id = blob.signed_id
            let image = {image: signed_id}
            let url = `/products/attachimage/${product.id}`
            fetch(url, {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              method: 'PATCH',
              body: JSON.stringify(image)
            })
            .then(resp => resp.json())
            .then(result => console.log(result))
            .then(window.location.reload(false))
          }
        })
      }
     
    return (
        <div className="admin-page-container">
            <div className="header">
              <h2 className="header-item">Admin Dashboard</h2>
              <div className="header-links">
              <Link className="link header-item" to="/shop"><h1>Go To Shop</h1></Link>
              <Link className="link header-item" to="/admin"><h1 onClick={props.handleLogout}>Logout</h1></Link>
              </div>
            </div>
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
                <input className="btn btn-submit" type="submit" />
            </form>
            <Gallery />
        </div>
    )
}

export default Admin