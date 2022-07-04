import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import CheckBox from "./checkbox.js";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row my-1">
            <InputGroup className="mb-1">
              <InputGroup.Checkbox
                aria-label="Checkbox for following text input"
                defaultChecked={this.props.complete}
              />
              <FormControl
                aria-label="Text input with checkbox"
                defaultValue={this.props.content}
              />
              <Button variant="outline-primary" id="update-button">
                Update
              </Button>
              <Button variant="outline-primary" id="delete-button">
                Delete
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    );
  }
}
