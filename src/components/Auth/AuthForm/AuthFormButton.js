import React from "react";
import { Button } from "react-bootstrap";

export default function AuthFormButton({ name, loading }) {
  return (
    <Button type="submit" disabled={loading} className="w-100">
      {name}
    </Button>
  );
}
