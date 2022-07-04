import React from "react";
import { Nav } from "react-bootstrap";
import NavBar from "../components/navbar.js";
import TodoList from "../components/todo_list.js";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <TodoList />
    </div>
  );
}
