import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import AuthForm from "./AuthForm/AuthForm";

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
    <AuthForm
      emailRef={emailRef}
      error={error}
      message={message}
      loading={loading}
      headerTitle="Forgot Password"
      buttonName="Submit"
      midLinkMessage=" "
      midLinkRoute="/login"
      midLinkName="Login?"
      underLinkMessage="Don't have a account?"
      underLinkRoute="/signup"
      underLinkName="Sign Up"
      handleSubmit={handleSubmit}
    />
  );
}
