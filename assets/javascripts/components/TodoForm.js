import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function TodoForm(props) {
  // define function for getting a cookie value
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  // get the 'csrftoken' to be used in post request
  const csrftoken = getCookie("csrftoken");

  let handleAddTodo = (e) => {
    let content = document.getElementById("new-content").value;
    let complete = document.getElementById("complete-new").checked;

    let todo = {
      content: content,
      complete: complete,
    };

    console.log(todo);

    fetch(`/api/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
        mode: "same-origin",
      },
      body: JSON.stringify(todo),
    });
    // clean up the todo form
    // reset the form
    document.getElementById("new-content").value = "";
    document.getElementById("complete-new").checked = false;
    // make change to the state of todo_list
    // to make it rerender
    props.add((count) => {
      console.log(count);
      return count + 1;
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row my-1">
          <InputGroup className="mb-3" id="add-todo-form">
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              defaultChecked={false}
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
