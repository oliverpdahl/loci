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


function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
      <AuthProvider>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href="#home">The Loci Method</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/preferences">
            <Nav.Link>Preferences</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">Test User</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/signup">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
              <div className="w-100" style={{maxWidth: "400px"}}>
                <SignUp />
              </div>
            </Container>
          </Route>
        </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
    
  );
}

export default App;