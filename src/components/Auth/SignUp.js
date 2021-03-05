import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import AuthFormGroup from "./AuthForm/AuthFormGroup";
import AuthFormHeader from "./AuthForm/AuthFormHeader";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Your Passwords Do Not Match");
    }

    try {
      setError("");
      setLoading(true);
      history.push("/");
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to sign");
    }

    setLoading(false);
  }
  return (
    <div className="m-4">
      <Card>
        <div className="m-4">
          <AuthFormHeader
            title="Sign Up"
            error={error}
            message={message}
          ></AuthFormHeader>
          <Form onSubmit={handleSubmit}>
            <AuthFormGroup
              name="Email"
              type="email"
              ref={emailRef}
            ></AuthFormGroup>
            <AuthFormGroup
              name="Password"
              type="password"
              ref={passwordRef}
            ></AuthFormGroup>
            <AuthFormGroup
              name="Password-Confirmation"
              type="password"
              ref={passwordConfirmRef}
            ></AuthFormGroup>
            <Button type="submit" disabled={loading} className="w-100">
              Submit
            </Button>
          </Form>
        </div>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
