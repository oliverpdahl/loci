import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import ForgotPassword from "../Auth/ForgotPassword";
import Preferences from "../Preferences/Preferences";
import { AuthProvider } from "../../contexts/AuthContext";
import PrivateRoute from "../PrivateRoute";
import NavBar from "../NavBar/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/preferences" component={Preferences} />
          {/* TODO - routes to one line */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
