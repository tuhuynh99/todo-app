import React, { useState, useEffect } from "react";
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import Todo from "./todo_item.js";
import TodoForm from "./TodoForm.js";

import { Link } from "react-router-dom";

export default function TodoList() {
  let [todos, setTodos] = useState([]);
  let [count, add] = useState(1);

  useEffect(() => {
    getTodos();
  });

  let getTodos = async () => {
    let response = await fetch("api/todos/");
    let data = await response.json();
    setTodos(data);
  };

  return (
    <div>
      <p class="d-none">{count}</p>

      <div className="container-fluid my-3">
        <div className="row">
          <div className="col">
            <h3 className="">Your Todo List</h3>
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
      <TodoForm add={add} />
    </div>
  );
}
