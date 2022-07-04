import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
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
            <CheckBox complete={this.props.complete} />
            <div className="col">{this.props.content}</div>

            <div className="col-auto">
              <div className="row ">
                <div class="col">
                  <Button variant="outline-primary ">Add Todo</Button>
                </div>
                <div class="col">
                  <Button variant="outline-primary">Add Todo</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
