import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import AuthForm from "./AuthForm/AuthForm";

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
    <AuthForm
      ref={{
        emailRef: emailRef,
        passwordRef: passwordRef,
        passwordConfirmRef: passwordConfirmRef,
      }}
      error={error}
      message={message}
      loading={loading}
      headerTitle="Sign Up"
      buttonName="Submit"
      underLinkMessage="Already have an account?"
      underLinkRoute="/login"
      underLinkName="Login"
      handleSubmit={handleSubmit}
    />
  );
}
