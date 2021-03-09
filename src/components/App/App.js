import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "../Auth/SignUp";
import ForgotPassword from "../Auth/ForgotPassword";
import Preferences from "../Preferences/Preferences";
import { AuthProvider } from "../../contexts/AuthContext";
import PrivateRoute from "../PrivateRoute";
import NavBar from "../NavBar/NavBar";
import AuthForm from "../Auth/AuthForm/AuthForm";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/preferences" component={Preferences} />
          <Route path="/login">
            <AuthForm formType="login" />
          </Route>
          <Route path="/forgot-password">
            <AuthForm formType="forgot-password" />
          </Route>
          <Route path="/signup">
            <AuthForm formType="signup" />
          </Route>
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
