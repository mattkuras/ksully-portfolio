import React from "react"
import "./Admin.css"


const Admin = () => {


    return (
        <div className="admin-page-container">
            <h1>Admin Dashboard</h1>
            <form className="product-form">
                <input className="product-info" type="file" />
                <input className="product-info" type="text" placeholder="Enter Product Name Here" />
                <input className="product-info" type="text" placeholder="Enter Product Price Here" />
                <select className="product-info">
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