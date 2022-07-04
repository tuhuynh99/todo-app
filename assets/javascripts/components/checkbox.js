import React from "react";
import { Form } from "react-bootstrap";

// return based on isCompleted
export default function CheckBox({ complete }) {
  let response = complete ? (
    <div className="col-auto d-flex justify-content-center">
      <Form.Check type="checkbox" id="1" checked />{" "}
    </div>
  ) : (
    <div className="col-auto d-flex justify-content-center">
      <Form.Check type="checkbox" id="0" />{" "}
    </div>
  );
  console.log(`value of checkbox${complete}`);
  return response;
}
