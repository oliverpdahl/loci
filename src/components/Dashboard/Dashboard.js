import React, {useState} from 'react';
import { Card, Alert, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { useAuth } from "../../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import PrivateRoute from "../PrivateRoute"
import JourneyContainer from '../Journey/JourneyContainer'

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
  const jumboBackground = "https://images.unsplash.com/photo-1535385793343-27dff1413c5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=957&q=80"
  const jumboStyle = {
    backgroundImage: 'url(' + jumboBackground + ')',
    backgroundSize: 'cover'
  }
  return(
    <div className='m-4'>
            
      <Jumbotron style={jumboStyle}>
        <h3 variant='light'>Create Mind Palaces to Remember Like Never Before</h3>
        <p>An ideal mind palace is a brightly lit deserted place with a standard route through it like a museum or school after hours and is filled with striking images of people doing an action to encode information with a key transition at every fifth image</p>
      </Jumbotron>
      <JourneyContainer/>
      <Card>
        <Card.Body>
        <h2 classsName="text-center mb-4">Profile</h2>
        {error && <Alert varient="danger">{error}</Alert>}
        <strong>Email: </strong> {currentUser.email}
        <Link to="/preferences" className="btn btn-primary w-100 my-3">
          Update Profile
        </Link>
        <Button variant="warning" onClick={handleLogOut} block>Log Out</Button>
        </Card.Body>
      </Card>
      <div>
      </div>
    </div>
  );
}