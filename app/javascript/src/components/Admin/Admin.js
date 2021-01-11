import React, { useState } from "react"
import "./Login.css"


const Admin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="login-page-container">
            <h1>Admin Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input className="input" type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="input" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Admin