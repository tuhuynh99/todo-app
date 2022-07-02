import React, { useState, useEffect } from "react";
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import Todo from "../components/todo_item.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col">
            <h3 className="">Your Todo List</h3>
          </div>
          <div className="col-auto">
            <Button variant="outline-primary">Add Todo</Button>
          </div>
        </div>
      </div>

      <Todo />
    </div>
  );
}
