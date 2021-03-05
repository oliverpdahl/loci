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
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
