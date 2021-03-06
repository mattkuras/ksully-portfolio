import React, { useEffect, useState } from "react"
import "./Admin.css"
import Header from './Header'
import { DirectUpload } from 'activestorage';

const Admin = (props) => {
  const [productList, setProductList] = useState([]);
  const [productImage, setProductImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState('');

  useEffect(() => {
    const response = fetch('/products')
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
    return <div className="product-container">
      {productList.map((product) => (
        <div key={product.name} className="product">
          <div className="img-container">
            <img src={product.image_url} alt="Photo" />
          </div>
          <h1>{product.name}</h1>
          <div className="btn-container">
            <button value={product.id} onClick={handleDelete} className="dbtn delete-btn">Delete</button>
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
      if (error) {
        console.log(error)
      } else {
        let signed_id = blob.signed_id
        let image = { image: signed_id }
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
      <Header logout={props.handleLogout}/>
      <form onSubmit={handleFormSubmit} className="product-form">
        <h1>Add New Photo Here</h1>
        <input onChange={e => setProductImage(e.target.files[0])} className="product-info" type="file" />
        <input value={productName} onChange={(e) => setProductName(e.target.value)} className="product-info" type="text" placeholder="Enter Product Name Here" />
        <input className="btn btn-submit" type="submit" />
      </form>
      <Gallery />
    </div>
  )
}

export default Admin