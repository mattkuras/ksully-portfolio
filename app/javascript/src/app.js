import React, { useState, useEffect } from "react"
import './App.css';
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom"
import Homepage from "./components/Hompage/Homepage"
import Shop from "./components/Shop/Shop"
import AdminDashboard from "./components/Admin/AdminDashboard"
import PaymentSuccess from "./components/PaymentPages/PaymentSuccess"
import PaymentFailure from "./components/PaymentPages/PaymentFailure"
import Faq from './components/Faq/Faq.js'
import Contact from './components/Contact/Contact.js'
import Messages from './components/Messages/Messages.js'
import Admin from "./components/Admin/Admin"
import Faqs from './components/Admin/Faqs'
import axios from 'axios'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [admin, setAdmin] = useState({})

  useEffect(() => {
    loginStatus()
  }, [])

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
    console.log('clicked')
  }

  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/paymentsuccess" component={PaymentSuccess} />
      <Route exact path="/paymentfailure" component={PaymentFailure} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/faq" component={Faq}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/admin/faqs" component={Faqs}/>
      <Route exact path='/admin/messages'
        render={props => (
          <Messages {...props} handleLogout={handleLogout} loggedInStatus={isLoggedIn} />
        )}>
        {isLoggedIn ? null : <Redirect to="/admin" />}
      </Route>
      <Route exact path='/admindashboard'
        render={props => (
          <AdminDashboard {...props} handleLogin={handleLogin} handleLogout={handleLogout} loggedInStatus={isLoggedIn} />
        )}>
        {isLoggedIn ? null : <Redirect to="/admin" />}
      </Route>
      <Route exact path='/admin'
        render={props => (
          <Admin {...props} handleLogin={handleLogin} loggedInStatus={isLoggedIn} />
        )}>
        {isLoggedIn ? <Redirect to="/admindashboard" /> : null}
      </Route>
    </Router>
  );
}

export default App;
