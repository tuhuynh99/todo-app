import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import CheckBox from "./checkbox.js";
import { unmountComponentAtNode } from "react-dom";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.getCookie = this.getCookie.bind(this);
  }

  // define function for getting a cookie value
  getCookie(name) {
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

  handleDelete() {
    // get the 'csrftoken' to be used in post request
    const csrftoken = this.getCookie("csrftoken");
    fetch(`/api/todo/${this.props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
        mode: "same-origin",
      },
    });
    document.getElementById(`todo-${this.props.id}`).remove();
  }

  handleUpdate() {
    const csrftoken = this.getCookie("csrftoken");

    let content = document.getElementById(`content-${this.props.id}`).value;
    let complete = document.getElementById(`complete-${this.props.id}`).checked;
    let todo = {
      content: content,
      complete: complete,
    };

    console.log(todo);

    fetch(`/api/todo/${this.props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
        mode: "same-origin",
      },
      body: JSON.stringify(todo),
    });
  }

  render() {
    return (
      <div id={`todo-${this.props.id}`}>
        <div className="container-fluid">
          <div className="row my-1">
            <InputGroup className="mb-1">
              <InputGroup.Checkbox
                aria-label="Checkbox for following text input"
                defaultChecked={this.props.complete}
                id={`complete-${this.props.id}`}
              />
              <FormControl
                aria-label="Text input with checkbox"
                defaultValue={this.props.content}
                id={`content-${this.props.id}`}
              />
              <Button
                variant="outline-primary"
                id={`update-button-${this.props.id}`}
                onClick={this.handleUpdate}
              >
                Update
              </Button>
              <Button
                variant="outline-primary"
                id={`delete-button-${this.props.id}`}
                onClick={this.handleDelete}
              >
                Delete
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    );
  }
}
