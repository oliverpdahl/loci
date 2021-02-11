import React, {useState} from 'react';
import { Card, Alert, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { useAuth } from "../../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import PrivateRoute from "../PrivateRoute"

export default function Dashboard() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  async function handleLogOut(){
    setError('')

    try {
      await logout()
      history.pushState('/login')

    }catch{
      setError('Failed to log out')
    }
  }

  return(
    <div>
      <h2>Dashboard</h2>
      <Jumbotron>
        <h1>The Method of Loci</h1>
        <h3>Create Mind Palaces to Remember Like Never Before</h3>
        <p>asdf asdf asd fas df asd fas df asdf asd fa sdf as dfa sdf as dfas df</p>
      </Jumbotron>
      <Card>
        <Card.Body>
        <h2 classsName="text-center mb-4">Profile</h2>
        {error && <Alert varient="danger">{error}</Alert>}
        <strong>Email: </strong> {currentUser.email}
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
        </Card.Body>
      </Card>
      <div>
        <Button variant="link" onClick={handleLogOut}>Log Out</Button>
      </div>
    </div>
  );
}