import React from "react";
import { Nav } from "react-bootstrap";
import NavBar from "../components/navbar.js";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <h3 className="px-3">Please Login To Using Todo List App</h3>
    </div>
  );
}
