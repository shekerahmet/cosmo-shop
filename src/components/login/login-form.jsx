"use client"
import {TfiGoogle, TfiGithub} from "react-icons/tfi"
import React from 'react'
import { Alert, Button, Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { signInWithCredentials, signInWithSocial } from "@/actions/auth-actions"
import { useFormState } from "react-dom";

const LoginForm = () => {
    const initialState={message:"", errors: {}};
    const [state,dispatch]= useFormState(signInWithCredentials, initialState )
    const { username, password } = state.errors;


  return (
    <Row>
            <Col sm={9} md={7} lg={5} className="mx-auto">
                <Card className="border-0 shadow rounded-3 my-5">
                    <Card.Body className="p-4 p-sm-5">
                        <Card.Title className="text-center mb-3 fw-light fs-5">
                            Sign In
                        </Card.Title>
                        {
                            state?.message ? 
                            <Alert variant="danger" className="mb-3">{state.message}</Alert> : ""
                        }
                        <Form action={dispatch}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="username"
                                    type="text"
                                    placeholder=""
                                    isInvalid={
                                        !!username
                                    }
                                    defaultValue="atunY0"

                                />
                                <Form.Control.Feedback type="invalid">
                                    
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    isInvalid={!!password}
                                    defaultValue=""
                                    
                                />
                                <Form.Control.Feedback type="invalid">
                                    
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <div className="d-grid">
                                <Button
                                    className="text-uppercase"
                                    type="submit"
                                    variant="warning"
                                    
                                >
                                    Sign in
                                </Button>
                            </div>
                        </Form>
                        <hr />

                        <Form action={signInWithSocial}>
                            <input type="hidden" 
                            name="provider"
                            value="google" />
                            <Button type="submit" variant='secondary' className="w-100 mb-3">
                                <TfiGoogle/> Signin with Google
                            </Button>
                        </Form>

                        <Form action={signInWithSocial}>
                        <input type="hidden" 
                            name="provider"
                            value="github" />
                            <Button type="submit" variant='secondary' className="w-100">
                                <TfiGithub/> Signin with Github
                            </Button>
                        </Form>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
  )
}

export default LoginForm