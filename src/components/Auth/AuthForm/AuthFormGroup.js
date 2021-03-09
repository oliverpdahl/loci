import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";

export default forwardRef((props, ref) => {
  return (
    <Form.Group id={props.name.toLowerCase()}>
      <Form.Label>{props.name}</Form.Label>
      <Form.Control type={props.type} ref={ref} required />
    </Form.Group>
  );
});
