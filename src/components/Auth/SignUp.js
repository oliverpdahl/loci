import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import AuthFormGroup from "./AuthForm/AuthFormGroup";
import AuthFormHeader from "./AuthForm/AuthFormHeader";
import AuthFormButton from "./AuthForm/AuthFormButton";
import AuthFormUnderLink from "./AuthForm/AuthFormUnderLink";

function AuthForm({
  emailRef,
  passwordRef,
  passwordConfirmRef,
  error,
  message,
  loading,
  headerTitle,
  handleSubmit,
  buttonName,
  underLinkName,
  underLinkMessage,
  underLinkRoute,
}) {
  return (
    <div className="m-4">
      <Card>
        <div className="m-4">
          <AuthFormHeader
            title={headerTitle}
            error={error}
            message={message}
          ></AuthFormHeader>
          <Form onSubmit={handleSubmit}>
            {!!emailRef ? (
              <AuthFormGroup
                name="Email"
                type="email"
                ref={emailRef}
              ></AuthFormGroup>
            ) : (
              ""
            )}
            {!!passwordRef ? (
              <AuthFormGroup
                name="Password"
                type="password"
                ref={passwordRef}
              ></AuthFormGroup>
            ) : (
              ""
            )}
            {!!passwordConfirmRef ? (
              <AuthFormGroup
                name="Password-Confirmation"
                type="password"
                ref={passwordConfirmRef}
              ></AuthFormGroup>
            ) : (
              ""
            )}
            <AuthFormButton name={buttonName} loading={loading} />
          </Form>
        </div>
      </Card>
      <AuthFormUnderLink
        message={underLinkMessage}
        route={underLinkRoute}
        link={underLinkName}
      />
    </div>
  );
}

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
      emailRef={emailRef}
      passwordRef={passwordRef}
      passwordConfirmRef={passwordConfirmRef}
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
