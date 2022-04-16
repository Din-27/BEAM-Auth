import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import RightContent from '../../assets/Left.png'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
import './style-right.css'
import Home from '../pages/Home';



const client_Id = '174744006432-lel3oegtpgur2k6rhsdrfn1t89ep68oj.apps.googleusercontent.com'

function Content() {

    const [form, setForm] = useState({
        email : "",
        password : ""
    })
    const [loginData, setLoginData] = useState(false)

    const [loginDataUser, setLoginDataUser] = useState(
        localStorage.getItem('loginDataUser') ?
        JSON.parse(localStorage.getItem('loginDataUser')) :
        null
    )
    const [loginDataGo, setLoginDataGo] = useState(
        localStorage.getItem('loginDataGo') ?
        JSON.parse(localStorage.getItem('loginDataGo')) :
        null
    )

    const [loginDataFb, setLoginDataFb] = useState(
        localStorage.getItem('loginDataFb') ?
        JSON.parse(localStorage.getItem('loginDataFb')) :
        null
    )

    const handleFailure = (result) => {
        alert(result)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginUser = async(e) => {
        e.preventDefault()
        const config = {
            headers : {
                "Content-Type" : "application/json",
            }
        }
        const body = form
        const response = await axios({
            method: "post",
            url : 'http://localhost:5000/api/login',
            data : {body, config}
        }).then(res => {
            setLoginData(true)
            setLoginDataUser(res.data.data)
            console.log(res.data.data)
            localStorage.setItem('loginDataUser', JSON.stringify(res.data.data.name), loginData)
        })
        
    }
    const handleLogin = async(response) => {
        // console.log(response)
        axios({
            method : 'post',
            url : 'http://localhost:5000/api/google-auth',
            data: {tokenId : response.tokenId}
        }).then(res => {
            console.log('Login success Go', res)
            const data = res.data.data.user
            setLoginDataGo(data)
            setLoginData(true)
            localStorage.setItem('loginDataGo', JSON.stringify(data.name), loginData)
        })
    }

    
    const handleLoginFacebook = (response) => {
        // console.log(response.data.user)
        axios({
            method : 'post',
            url : 'http://localhost:5000/api/facebook-auth',
            data: {accessToken : response.accessToken, userID : response.userID, picture : response.picture.data.url, name: response.name }
        }).then(res => {
            console.log('Login success client side', res.data.user)
            const data = res.data.user
            setLoginDataFb(data)
            setLoginData(true)
            localStorage.setItem('loginDataFb', JSON.stringify(data.name), loginData)
        })
    }
    
    const handleLogoutGo = () => {
        localStorage.removeItem('loginDataGo')
        setLoginDataGo(null)
        setLoginData(false)
    }
    const handleLogoutFb = () => {
        localStorage.removeItem('loginDataFb')
        setLoginDataFb(null)
    }

    const handleLogoutUser = () => {
        localStorage.removeItem('loginDataUser')
        setLoginDataUser(null)
        setLoginData(false)
    }
    // useEffect((data)=> {
    //     if(loginDataGo.name === data.name){
    //         setLoginData(true)
    //     }else{
    //         loginDataGo(null)
    //         setLoginData(false)
    //     }
    // }, [])

  return (
        <div className="row">
            <div className="container-fluid col-md-6">
                <img className='img-fluid image-side-right' src={RightContent} alt="RightContent" />
            </div>
            <div className="col-md-6">
            {loginData ? (
                <div className="row">
                    <div className="col-10 mt-4 d-grid mx-auto">
                        <div className="col-10 mt-4 d-grid mx-auto">
                            <Home 
                            dataGo={loginDataGo} 
                            dataFb={loginDataFb} 
                            dataUser={loginDataUser} 
                            logoutGo={handleLogoutGo}
                            logoutUser={handleLogoutUser}
                            />
                        </div>
                    </div>
                </div>
                    ) : (
                    <div className="row">
                        <div className="col-10 mt-4 d-grid mx-auto">
                            <h1 style={{color: 'red'}} className='mb-4 mt-5'>Log in to Beam Space</h1>
                            <GoogleLogin 
                            className='justify-content-center'
                            clientId={client_Id}
                            buttonText='Log in with Google'
                            onSuccess={handleLogin}
                            onFailure={handleFailure}
                            cookiePolicy={'single_host_origin'}
                            >
                            </GoogleLogin>
                        </div>
                        <div className="col-10 d-grid gap-2 mx-auto">
                            <FacebookLogin
                            appId="3188631798042121"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={handleLoginFacebook}
                            cssClass="my-facebook-button-class mx-auto col-12 btn mt-4 btn-primary"
                            icon="fa-facebook me-3"
                            />
                        </div>
                        <div className="col-10 d-grid gap-2 mx-auto mt-2">
                            <div className="row">
                            <div className="col-3"><hr/></div>
                            <div className="col-6 text-center spaning" style={{color: 'grey'}}>or login with your email</div>
                            <div className="col-3"><hr/></div>
                        </div>
                    </div>
                    <div className="col-10 d-grid gap-2 mx-auto mt-2">
                        <Form onSubmit={handleLoginUser}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className='fw-bold'>Email Address<span style={{color: 'red'}}>*</span></Form.Label>
                                <Form.Control 
                                style={{border: 'none'}} 
                                className='form-control-md' 
                                type="email" 
                                placeholder="E.g, name@email.com" 
                                name="email"
                                onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label className='fw-bold'>Password<span style={{color: 'red'}}>*</span></Form.Label>
                                <Form.Control 
                                style={{border: 'none'}} 
                                className='form-control-md' 
                                type="password" 
                                placeholder="Enter your password" 
                                name="password"
                                onChange={handleChange}/>
                            </Form.Group>
                            <Button 
                            style={{backgroundColor : 'red', border : 'none'}} 
                            className='btn mt-4 d-grid gap-2 col-12 mx-auto fw-bold py-2 btn-outline-light' 
                            type="submit">Login</Button>
                        </Form>
                    </div>
                    <div className="col-12 text-center fw-bold mt-4">
                        <a href='#' style={{border: 'none', textDecoration: 'none'}}>Forgot Password?</a>
                    </div>
                    <div className="col-12 text-center fw-bold text-center mt-4">
                        <p>Don't have an account? <a href='#' style={{border: 'none', textDecoration: 'none'}}>Create an account</a></p>
                    </div>
                </div>)}
            </div>
        </div>
  )
}

export default Content