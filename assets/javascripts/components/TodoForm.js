import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function TodoForm() {
  let handleAddTodo = (e) => {
    let content = document.getElementById("new-content").value;
    let complete = document.getElementById("complete-new").value;
    let todo = {
      content: content,
      complete: complete === "on" ? true : false,
    };

    console.log(todo);

    fetch(`/api/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row my-1">
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              defaultChecked={true}
              id="complete-new"
            />
            <FormControl
              aria-label="Text input with checkbox"
              id="new-content"
            />
            <Button
              variant="outline-secondary"
              type="submit"
              id="add-todo-button"
              onClick={handleAddTodo}
            >
              Add Todo
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
