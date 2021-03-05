import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import AuthFormGroup from "./AuthForm/AuthFormGroup";
import AuthFormHeader from "./AuthForm/AuthFormHeader";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      resetPassword(emailRef.current.value);
      setMessage("Check your inbox for password reset");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="m-4">
      <Card>
        <div className="m-4">
          <AuthFormHeader
            title="Forgot Password"
            error={error}
            message={message}
          ></AuthFormHeader>
          <Form onSubmit={handleSubmit}>
            <AuthFormGroup
              name="Email"
              type="email"
              ref={emailRef}
            ></AuthFormGroup>
            <Button type="submit" disabled={loading} className="w-100">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login?</Link>
          </div>
        </div>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
