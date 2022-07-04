import React, { useState, useEffect } from "react";
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import Todo from "./todo_item.js";
import TodoForm from "./TodoForm.js";

import { Link } from "react-router-dom";

export default function TodoList() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  let getTodos = async () => {
    let response = await fetch("api/todos/");
    let data = await response.json();
    setTodos(data);
    console.log(data);
  };

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

      <div>
        {todos.map((props, index) => (
          <Todo
            content={props.content}
            complete={props.complete}
            id={props.id}
          />
        ))}
      </div>
      <TodoForm />
    </div>
  );
}
