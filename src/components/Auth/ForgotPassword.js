import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
import AuthForm from "./AuthForm/AuthForm";
=======
import { Link, useHistory } from "react-router-dom";
import AuthFormGroup from "./AuthForm/AuthFormGroup";
import AuthFormHeader from "./AuthForm/AuthFormHeader";
import AuthFormButton from "./AuthForm/AuthFormButton";
>>>>>>> parent of ffd8963 (Finish underlink)

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
<<<<<<< HEAD
    <AuthForm
      ref={{
        emailRef: emailRef,
      }}
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
=======
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
            <AuthFormButton name="Reset Password" loading={loading} />
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
>>>>>>> parent of ffd8963 (Finish underlink)
  );
}
