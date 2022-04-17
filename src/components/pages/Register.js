import React, {useState} from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'


function Register({trigger}) {

    const [formRegis, setFormRegis] = useState({
        name : "",
        email : "",
        password : ""
    })

    const handleChangeRegis = (e) => {
        setFormRegis({
            ...formRegis,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitRegis = async(e) => {
        e.preventDefault()
        const config = {
            headers: {
            "Content-Type" : "application/json"
            }
        }
        const body = formRegis
        const response = await axios({
            method : 'post',
            url : 'http://localhost:5000/api/register',
            data : {
                body, 
                config
                }
            }).then(res=>{
                console.log(res)
        })
        console.log(response)
    }

  return (
        <div className="col-md-6">
            <div className="row">
                <div className="col-10 d-grid gap-2 mx-auto mt-4">
                    <h1 style={{color: 'red'}} className='mb-4 mt-5'>Register to Beam Space</h1>
                    <Form className='mt-3' onSubmit={handleSubmitRegis}>
                        <Form.Group className="mb-3" controlId="formGroupFullname">
                        <Form.Label className='fw-bold'>Name<span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control 
                            style={{border: 'none'}} 
                            className='form-control-md' 
                            type="text" 
                            placeholder="Fullname" 
                            onChange={handleChangeRegis}
                            name="name"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className='fw-bold'>Email Address<span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control 
                            style={{border: 'none'}} 
                            className='form-control-md' 
                            type="email" 
                            placeholder="E.g, name@email.com"
                            onChange={handleChangeRegis} 
                            name="email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label className='fw-bold'>Password<span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control 
                            style={{border: 'none'}} 
                            className='form-control-md' 
                            type="password" 
                            placeholder="Enter your password"
                            onChange={handleChangeRegis} 
                            name="password"/>
                        </Form.Group>
                        <Button 
                        style={{backgroundColor : 'red', border : 'none'}} 
                        className='btn mt-4 d-grid gap-2 col-12 mx-auto fw-bold py-2 btn-outline-light' 
                        type="submit">Register</Button>
                    </Form>
                </div>
                <div className="col-12 text-center fw-bold text-center mt-4">
                    <p>You have an account? <span onClick={trigger} className='text-primary' style={{border: 'none', textDecoration: 'none', cursor : 'pointer'}}>Login</span></p>
                </div>
            </div>
        </div>
  )
}

export default Register