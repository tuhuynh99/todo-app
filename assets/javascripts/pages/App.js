import React from "react";
import ReactDOM from "react-dom";
import NavBar from "../components/navbar.js";
import Home from "./home.js";
import GoogleLogin from "./login.js";

// router

import { HashRouter as Router, Route } from "react-router-dom";

// style
import "../../css/App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/index" exact component={Home} />
      <Route path="/login" component={GoogleLogin} />
    </Router>
  );
}

export default App;
