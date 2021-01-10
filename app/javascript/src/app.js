import React from "react"
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import Homepage from "./components/Hompage/Homepage"
import Shop from "./components/Shop/Shop"
import AdminDashboard from "./components/Admin/AdminDashboard"
import Admin from "./components/Admin/Admin"


function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admindashboard" component={AdminDashboard} />
    </Router>
  );
}

export default App;
