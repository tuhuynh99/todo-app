import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./javascripts/components/navbar.js";
import Home from "./javascripts/pages/home.js";
import GoogleLogin from "./javascripts/pages/login.js";

// router

import { HashRouter as Router, Route } from "react-router-dom";

// style
import App from "./javascripts/pages/App.js";

ReactDOM.render(<App />, document.getElementById("root"));
