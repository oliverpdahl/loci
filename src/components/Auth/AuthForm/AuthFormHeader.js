import React from "react";
import { Card, Alert } from "react-bootstrap";

export default function AuthFormHeader({ title, error, message }) {
  return (
    <Card.Body className="text-center">
      <h2>{title}</h2>
      {error && <Alert varient="danger">{error}</Alert>}
      {message && <Alert varient="success">{message}</Alert>}
    </Card.Body>
  );
}
