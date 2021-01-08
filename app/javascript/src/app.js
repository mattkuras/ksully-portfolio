import React from "react"
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import Homepage from "./components/Hompage/Homepage"
import Shop from "./components/Shop/Shop"


function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
    </Router>
  );
}

export default App;
