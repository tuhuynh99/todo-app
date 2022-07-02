import React from "react";
import ReactDOM from "react-dom";
import NavBar from "../components/navbar.js";
import Home from "./home.js";
import GoogleLogin from "./login.js";

// router

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// style
import "../../css/App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="home/" exact element={<Home />} />
        <Route path="login/" element={<GoogleLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
