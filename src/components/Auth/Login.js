import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
<<<<<<< HEAD
import AuthForm from "./AuthForm/AuthForm";
=======
import AuthFormGroup from "./AuthForm/AuthFormGroup";
import AuthFormHeader from "./AuthForm/AuthFormHeader";
import AuthFormButton from "./AuthForm/AuthFormButton";
>>>>>>> parent of ffd8963 (Finish underlink)

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
<<<<<<< HEAD
    <AuthForm
      ref={{
        emailRef: emailRef,
        passwordRef: passwordRef,
      }}
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
=======
    <div className="m-4">
      <Card>
        <div className="m-4">
          <AuthFormHeader
            title="Log In"
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
            <AuthFormButton name="Submit" loading={loading} />
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
>>>>>>> parent of ffd8963 (Finish underlink)
  );
}
