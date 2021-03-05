import React from "react";
import { Form } from "react-bootstrap";

export default function AuthFormGroup({ name, type, ref }) {
  return (
    <Form.Group id={name.toLowerCase()}>
      <Form.Label>{name}</Form.Label>
      <Form.Control type={type} ref={ref} required />
    </Form.Group>
  );
}
