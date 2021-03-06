import React from "react";
import { Form, Card } from "react-bootstrap";
import AuthFormGroup from "./AuthFormGroup";
import AuthFormHeader from "./AuthFormHeader";
import AuthFormButton from "./AuthFormButton";
import AuthFormUnderLink from "./AuthFormUnderLink";

export default function AuthForm({
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
  midLinkName,
  midLinkMessage,
  midLinkRoute,
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
          {!!midLinkMessage && !!midLinkName && !!midLinkRoute ? (
            <AuthFormUnderLink
              message={midLinkMessage}
              route={midLinkRoute}
              link={midLinkName}
            />
          ) : (
            ""
          )}
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
