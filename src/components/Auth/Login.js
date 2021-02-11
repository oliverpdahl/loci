import React , {useRef, useState} from 'react'
import { Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth} from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            history.push('/')
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to login')
        }

        setLoading(false)

    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 classsName="text-center mb-4">Log In</h2>
                    {error && <Alert varient="danger">{error}</Alert>}
                </Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button type="submit" disabled={loading} className="w-100">Submit</Button>
                </Form>
                <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}
