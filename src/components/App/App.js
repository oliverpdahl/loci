import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import ForgotPassword from "../Auth/ForgotPassword";
import Preferences from "../Preferences/Preferences";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";
import PrivateRoute from "../PrivateRoute";
import logo from "../../logo.png";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* TODO - Navbar as component */}
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/dashboard">
            <img
              src={logo}
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">
              {/* TODO - links to component */}
              <LinkContainer to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/preferences">
                <Nav.Link>Preferences</Nav.Link>
              </LinkContainer>
            </Nav>
            {/* TODO - if there is as user they are shown in the nav bar */}
          </Navbar.Collapse>
        </Navbar>
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

export default App;
