import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function TodoForm() {

  let handleAddTodo = () {
    
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row my-1">
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              defaultChecked={true}
            />
            <FormControl aria-label="Text input with checkbox" />
            <Button variant="outline-secondary" id="add-todo-button" onClick={}>
              Add Todo
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
