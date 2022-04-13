import '../styles/ErrorPage.css';
import '../styles/Formstyle.css';
import React, { setState, useState, useEffect } from "react";
import mainLogo from '../../resources/gardenblack.png'

class Login extends React.Component {

    validateFn

    handleSubmit = (event) => {
        event.preventDefault()
        const { loginUsername: username, loginPassword: password } = event.target.elements
        const foundUser = this.validateFn(username, password)
        if (!foundUser) {
            this.setState({loginError: 'User Not Found'});
        } else {
            this.setState({loginError: ''});
        }
    }

    constructor (props) {
        super(props)
        const { validateUserFn } = props
        this.validateFn = validateUserFn
    }
    
    render () {
        return <div className="container pt-5">
            <form 
                className="narrow-form d-flex flex-column align-items-center pt-5"
                onSubmit={this.handleSubmit}
            >
                <img className="mb-4" src={mainLogo} width="72" height="72"></img>
                <h2 className="mb-4">Please log in</h2>
                <div className="form-outline mb-4">
                    <input type="email" id="loginUsername" name="loginUsername" className="form-control" />
                    <label className="form-label" htmlFor="loginUsername">Email address</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="loginPassword" name="loginPassword" className="form-control" />
                    <label className="form-label" htmlFor="loginPassword">Password</label>
                </div>
                { this.loginError && <div className="alert alert-danger">{this.loginError}</div> }
                <button className="btn me-2 hover-dark c-bg-green" type="submit">Login</button>
            </form>
        </div>
    }
}

export default Login;