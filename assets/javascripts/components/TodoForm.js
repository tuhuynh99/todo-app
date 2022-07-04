import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function TodoForm() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row my-1">
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              checked
            />
            <FormControl aria-label="Text input with checkbox" />
            <Button variant="outline-secondary" id="button-addon1">
              Add Todo
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
