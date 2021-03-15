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
<<<<<<< HEAD
>>>>>>> parent of ffd8963 (Finish underlink)
=======
>>>>>>> parent of ffd8963 (Finish underlink)

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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> parent of ffd8963 (Finish underlink)
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
            <AuthFormButton name="Submit" loading={loading} />
          </Form>
        </div>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
<<<<<<< HEAD
>>>>>>> parent of ffd8963 (Finish underlink)
=======
>>>>>>> parent of ffd8963 (Finish underlink)
  );
}
