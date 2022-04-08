import React from 'react'
import { Button, Form } from 'react-bootstrap'
import RightContent from '../../assets/Left.png'
import Gicon from '../../assets/G-icon.png'


function Content() {
  return (
    <>
        <div className="row">
            <div className="col-md-6">
                <img className='img-fluid' src={RightContent} alt="RightContent" />
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-10 mt-5 d-grid gap-2 mx-auto">
                        <h1 style={{color: 'red'}} className='mb-4'>Log in to Beam Space</h1>
                        <Button className='btn py-2' variant="outline-secondary">
                            <img className='me-3' src={Gicon} alt="Gicon" />
                            <span className='fw-bold'>Log in with Google</span>
                        </Button>
                    </div>
                    <div className="col-10 d-grid gap-2 mx-auto">
                        <Button style={{backgroundColor : 'rgba(58, 88, 155, 1)',boxShadow: '0 0 2px black', border: 'none'}} className='btn mt-4 py-2 btn-outline-light'>
                            <span className='d-flex align-items-center justify-content-center fw-bold'>
                                <span className='me-3 fs-5'>
                                    f
                            </span>
                                Log in with Facebook
                            </span>
                        </Button>
                    </div>
                    <div className="col-10 d-grid gap-2 mx-auto mt-4">
                        <div className="row">
                            <div className="col-3"><hr/></div>
                            <div className="col-6 text-center" style={{color: 'grey'}}>or login with your email</div>
                            <div className="col-3"><hr/></div>
                        </div>
                    </div>
                    <div className="col-10 d-grid gap-2 mx-auto mt-4">
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className='fw-bold'>Email Address<span style={{color: 'red'}}>*</span></Form.Label>
                                <Form.Control style={{border: 'none'}} className='form-control-lg' type="email" placeholder="E.g, name@email.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label className='fw-bold'>Password<span style={{color: 'red'}}>*</span></Form.Label>
                                <Form.Control style={{border: 'none'}} className='form-control-lg' type="password" placeholder="Enter your password" />
                            </Form.Group>
                            <Button style={{backgroundColor : 'red', border : 'none'}} className='btn mt-4 d-grid gap-2 col-12 mx-auto fw-bold py-2 btn-outline-light' type="submit">Login</Button>
                        </Form>
                    </div>
                    <div className="col-12 text-center fw-bold mt-4">
                        <a href='#' style={{border: 'none', textDecoration: 'none'}}>Forgot Password?</a>
                    </div>
                    <div className="col-12 text-center fw-bold text-center mt-4">
                        <p>Don't have an account? <a href='#' style={{border: 'none', textDecoration: 'none'}}>Create an account</a></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Content