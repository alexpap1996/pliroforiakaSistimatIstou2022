import '../styles/ErrorPage.css';
import '../styles/Formstyle.css';
import React, { setState, useState, useEffect } from "react";
import mainLogo from '../../resources/gardenblack.png'

let currUsername = ''
let currPassword = ''

const onLoginButtonClick = (validateFn, setLoginError, setCurrentUser, changePageNameFn) => {
    console.log(currUsername)
    const foundUser = validateFn(currUsername, currPassword)
    if (!foundUser) {
        setLoginError('User Not Found')
    } else {
        //login logic here
        setCurrentUser(foundUser)
        setLoginError(undefined)
        changePageNameFn('Home')
    }
}


const Login = (props) => {
    const { validateUserFn, loginError, setLoginError, setCurrentUser, changePageNameFn } = props
    
    return <div className="container pt-5">
        <div
            className="narrow-form d-flex flex-column align-items-center pt-5"
        >
            <img className="mb-4" src={mainLogo} width="72" height="72"></img>
            <h2 className="mb-4">Please log in</h2>
            <div className="form-outline mb-4">
                <input type="text" id="loginUsername" name="loginUsername" className="form-control" onChange={(event) => {
                    currUsername = event.target.value
                }}/>
                <label className="form-label" htmlFor="loginUsername">Email address</label>
            </div>
            <div className="form-outline mb-4">
                <input type="text" id="loginPassword" name="loginPassword" className="form-control" onChange={(event) => {
                    currPassword = event.target.value
                }}/>
                <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>
            <button 
                className="btn hover-dark c-bg-green"
                type="submit"
                onClick={() => {onLoginButtonClick(validateUserFn, setLoginError, setCurrentUser, changePageNameFn)}}
            >
                Login
            </button>
            { loginError && <div className="alert alert-danger mt-3">{loginError}</div> }
        </div>
    </div>
}

export default Login;