import React, { useState } from "react"
import "./Login.css"
import axios from 'axios'


const Admin = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        let admin = {
          username: username,
          password: password
        }
        axios.post('/login', { admin }, { withCredentials: true })
          .then(response => {
            if (response.data.logged_in) {
              console.log(response.data)
              props.handleLogin(response.data)
              redirect()
            } else {
              setErrors({
                errors: response.data.errors
              })
              console.log(errors)
            }
          })
          .catch(error => console.log('api errors:', error))
      };

      const redirect = () => {
        props.history.push('/admindashboard')
      }

    return (
        <div className="login-page-container">
            <h1>Admin Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input className="input" type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="input" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
            <button onClick={redirect} >click me</button>
        </div>
    )
}

export default Admin