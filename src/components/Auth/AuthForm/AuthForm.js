import React, { useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Form, Card } from "react-bootstrap";
import AuthFormGroup from "./AuthFormGroup";
import AuthFormHeader from "./AuthFormHeader";
import AuthFormButton from "./AuthFormButton";
import AuthFormUnderLink from "./AuthFormUnderLink";

export default function AuthForm({ formType }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, login, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleLoginSubmit(e) {
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

  async function handleForgotPasswordSubmit(e) {
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

  async function handleSignUpSubmit(e) {
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

  const loginProps = {
    headerTitle: "Log In",
    buttonName: "Submit",
    midLinkMessage: "Don't have an account?",
    midLinkRoute: "/signup",
    midLinkName: "Sign Up",
    underLinkMessage: "",
    underLinkRoute: "/forgot-password",
    underLinkName: "Forgot Password?",
    handleSubmit: handleLoginSubmit,
    email: 1,
    password: 1,
    passwordConfirm: 0,
  };

  const forgotPasswordProps = {
    headerTitle: "Forgot Password",
    buttonName: "Submit",
    midLinkMessage: " ",
    midLinkRoute: "/login",
    midLinkName: "Login?",
    underLinkMessage: "Don't have a account?",
    underLinkRoute: "/signup",
    underLinkName: "Sign Up",
    handleSubmit: handleForgotPasswordSubmit,
    email: 1,
    password: 0,
    passwordConfirm: 0,
  };

  const signUpProps = {
    headerTitle: "Sign Up",
    buttonName: "Submit",
    underLinkMessage: "Already have an account?",
    underLinkRoute: "/login",
    underLinkName: "Login",
    handleSubmit: handleSignUpSubmit,
    email: 1,
    password: 1,
    passwordConfirm: 1,
  };

  function typedProps(formType) {
    switch (formType) {
      case "signup":
        return signUpProps;
      case "login":
        return loginProps;
      case "forgot-password":
        return forgotPasswordProps;
      default:
        return forgotPasswordProps;
    }
  }

  const passProps = typedProps(formType);

  return (
    <div className="m-4">
      <Card>
        <div className="m-4">
          <AuthFormHeader
            title={passProps.headerTitle}
            error={error}
            message={message}
          ></AuthFormHeader>
          <Form onSubmit={passProps.handleSubmit}>
            {passProps.email ? (
              <AuthFormGroup
                name="Email"
                type="email"
                ref={emailRef}
              ></AuthFormGroup>
            ) : (
              ""
            )}
            {!!passProps.password ? (
              <AuthFormGroup
                name="Password"
                type="password"
                ref={passwordRef}
              ></AuthFormGroup>
            ) : (
              ""
            )}
            {!!passProps.passwordConfirm ? (
              <AuthFormGroup
                name="Password-Confirmation"
                type="password"
                ref={passwordConfirmRef}
              ></AuthFormGroup>
            ) : (
              ""
            )}
            <AuthFormButton name={passProps.buttonName} loading={loading} />
          </Form>
          {!!passProps.midLinkMessage &&
          !!passProps.midLinkName &&
          !!passProps.midLinkRoute ? (
            <AuthFormUnderLink
              message={passProps.midLinkMessage}
              route={passProps.midLinkRoute}
              link={passProps.midLinkName}
            />
          ) : (
            ""
          )}
        </div>
      </Card>
      <AuthFormUnderLink
        message={passProps.underLinkMessage}
        route={passProps.underLinkRoute}
        link={passProps.underLinkName}
      />
    </div>
  );
}
