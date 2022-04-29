import '../styles/ErrorPage.css';
import '../styles/Formstyle.css';
import React from "react";
import mainLogo from '../../resources/gardenblack.png'

const onSignUpButtonClick = () => {

}

const toggleActiveClass = (value, classList) => {
    if (!value) {
        classList.remove('active')
    } else {
        classList.add('active')
    }
}


const Signup = (props) => {
    const { validateUserFn, signupError, setsignupError, setCurrentUser, changePageNameFn } = props
    
    return <div className="container pt-5">
        <div
            className="narrow-form d-flex flex-column align-items-center pt-5"
        >
            <img className="mb-4" src={mainLogo} width="72" height="72" alt="main logo"></img>
            <h2 className="mb-4">Create User</h2>
            <div className="form-outline mb-4">
                <input type="text" id="signupUsername" name="signupUsername" className="form-control" onChange={(event) => {
                    const { value, classList } = event.target 
                    toggleActiveClass(value, classList)
                }}/>
                <label className="form-label" htmlFor="signupUsername">Username</label>
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="signupPassword" name="signupPassword" className="form-control" onChange={(event) => {
                    const { value, classList } = event.target 
                    toggleActiveClass(value, classList)
                }}/>
                <label className="form-label" htmlFor="signupPassword">Password</label>
            </div>
            <button 
                className="btn hover-dark c-bg-green"
                type="submit"
                onClick={() => {onSignUpButtonClick(validateUserFn, setsignupError, setCurrentUser, changePageNameFn)}}
            >
                Sign Up
            </button>
            { signupError && <div className="alert alert-danger mt-3">{signupError}</div> }
        </div>
    </div>
}

export default Signup;
