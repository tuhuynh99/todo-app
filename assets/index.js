import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./javascripts/pages/landing_page.js";
import HomeView from "./javascripts/pages/home_view.js";

ReactDOM.render(
  <React.StrictMode>
    <HomeView />
  </React.StrictMode>,
  document.getElementById("home")
);
