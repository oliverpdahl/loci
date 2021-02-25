import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp'
import ForgotPassword from '../Auth/ForgotPassword'
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';
import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {AuthProvider} from '../../contexts/AuthContext' 
import PrivateRoute from "../PrivateRoute"
import logo from "../../logo.png"


function App() {

  return (
      <BrowserRouter>
      <AuthProvider>
      <Navbar bg='light' variant='light'>
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
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/preferences">
            <Nav.Link>Preferences</Nav.Link>
          </LinkContainer>
          </Nav>
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Test User</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
        <PrivateRoute path="/preferences" component={Preferences}/>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/signup">
              <SignUp />
        </Route>
      </Switch>
        </AuthProvider>
      </BrowserRouter>
    
  );
}

export default App;