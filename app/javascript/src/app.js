import React, { useState, useEffect } from "react"
import './App.css';
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom"
import Homepage from "./components/Hompage/Homepage"
import Shop from "./components/Shop/Shop"
import AdminDashboard from "./components/Admin/AdminDashboard"
import Admin from "./components/Admin/Admin"
import axios from 'axios'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [admin, setAdmin] = useState({})

  useEffect(  () => {
    loginStatus()
  }, [])

  const logged = () => {
    isLoggedIn
  }

  const loginStatus = async () => {
    await axios.get('/logged_in',
      { withCredentials: true })
      .then(response => {
        setAdmin(response.data.admin)
        response.data.logged_in ? setIsLoggedIn(true) : setIsLoggedIn(false)
      })
      .catch(error => console.log('api errors:', error))
  }

  const handleLogin = (data) => {
    setAdmin(data.admin)
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser({})
  }

  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
      {/* <Route exact path="/admin" component={Admin} /> */}
      <Route exact path='/admindashboard'
        render={props => (
          <AdminDashboard {...props} handleLogin={handleLogin} loggedInStatus={isLoggedIn} />
        )}>
        {logged ? null : <Redirect to="/admin" />}
      </Route>
      <Route exact path='/admin'
        render={props => (
          <Admin {...props} handleLogin={handleLogin} loggedInStatus={isLoggedIn} />
        )}>
      </Route>
      {/* <Route exact path="/admin" component={Admin} /> */}
    </Router>
  );
}

export default App;
