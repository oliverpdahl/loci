import React , {useRef, useState} from 'react'
import { Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth} from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Your Passwords Do Not Match')
        }

        try{
            setError('')
            setLoading(true)
            history.push('/')
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to sign')
        }

        setLoading(false)

    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 classsName="text-center mb-4">Sign Up</h2>
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
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button type="submit" disabled={loading} className="w-100">Submit</Button>
                </Form>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </div>
    )
}
