import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import AuthForm from "./AuthForm/AuthForm";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      history.push("/");
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to login");
    }

    setLoading(false);
  }
  return (
    <AuthForm
      emailRef={emailRef}
      passwordRef={passwordRef}
      error={error}
      message={message}
      loading={loading}
      headerTitle="Log In"
      buttonName="Submit"
      midLinkMessage="Don't have an account?"
      midLinkRoute="/signup"
      midLinkName="Sign Up"
      underLinkMessage=""
      underLinkRoute="/forgot-password"
      underLinkName="Forgot Password?"
      handleSubmit={handleSubmit}
    />
  );
}
