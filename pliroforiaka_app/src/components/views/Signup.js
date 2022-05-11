import "../styles/ErrorPage.css";
import "../styles/Formstyle.css";
import React, { useState } from "react";
import mainLogo from "../../resources/gardenblack.png";
import Axios from "axios";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const signUpData = {
  username: undefined,
  email: undefined,
  firstname: undefined,
  lastname: undefined,
  password: undefined,
  confirmpassword: undefined,
};

const onSignUpButtonClick = () => {
  //any field is empty
  if (Object.values(signUpData).some((val) => !val)) {
    return "You must populate all fields";
  }

  //passwords match
  if (signUpData.password !== signUpData.confirmpassword) {
    return "Passwords don't match";
  }

  //email field is valid
  if (!regEmail.test(signUpData.email)) {
    return "Email syntax is invalid";
  }

  //password is at least 8 characters long
  if (signUpData.password.length < 8) {
    return "Your password must be at least 8 characters long";
  }

  return null;
};

const updateFieldData = (fieldName, fieldValue) => {
  signUpData[fieldName] = fieldValue;
};

const toggleActiveClass = (value, classList) => {
  if (!value) {
    classList.remove("active");
  } else {
    classList.add("active");
  }
};

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  const {
    validateUserFn,
    signupError,
    setSignupError,
    setCurrentUser,
    changePageNameFn,
  } = props;

  const send = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", username);
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("email", email);
    data.append("password", password);
    data.append("file", file);

    Axios.post("http://localhost:3000/register", data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    changePageNameFn("Home");
  };

  return (
    <div className="container pt-5">
      <div className="medium-form d-flex flex-column pt-5">
        <img
          className="mb-4 align-self-center"
          src={mainLogo}
          width="72"
          height="72"
          alt="main logo"
        ></img>
        <form action="#">
          <h2 className="mb-4">Create User</h2>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              onChange={(event) => {
                const { id, value, classList } = event.target;
                setUsername(value);
                toggleActiveClass(value, classList);
                updateFieldData(id, value);
              }}
            />
            <label className="form-label" htmlFor="username">
              Username
            </label>
          </div>
          <div className="form-outline mb-4">
            <div className="position-relative">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={(event) => {
                  const { id, value, classList } = event.target;
                  setEmail(value);
                  toggleActiveClass(value, classList);
                  updateFieldData(id, value);
                }}
              />
              <label className="form-label" htmlFor="email">
                Email
              </label>
            </div>
          </div>
          <div className="form-outline mb-4 d-flex justify-content-between">
            <div className="position-relative">
              <input
                type="text"
                id="firstname"
                name="firstName"
                className="form-control"
                onChange={(event) => {
                  const { id, value, classList } = event.target;
                  setFirstName(value);
                  toggleActiveClass(value, classList);
                  updateFieldData(id, value);
                }}
              />
              <label className="form-label" htmlFor="firstname">
                First Name
              </label>
            </div>

            <div className="position-relative">
              <input
                type="text"
                id="lastname"
                name="lastName"
                className="form-control"
                onChange={(event) => {
                  const { id, value, classList } = event.target;
                  setLastName(value);
                  toggleActiveClass(value, classList);
                  updateFieldData(id, value);
                }}
              />
              <label className="form-label" htmlFor="lastname">
                Last Name
              </label>
            </div>
          </div>
          <div className="form-outline mb-4 d-flex justify-content-between">
            <div className="position-relative">
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                onChange={(event) => {
                  const { id, value, classList } = event.target;
                  setFirstName(value);
                  toggleActiveClass(value, classList);
                  updateFieldData(id, value);
                }}
              />
              <label className="form-label" htmlFor="password">
                Password
              </label>
            </div>
            <div className="position-relative">
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                className="form-control"
                onChange={(event) => {
                  const { id, value, classList } = event.target;
                  setPassword(value);
                  toggleActiveClass(value, classList);
                  updateFieldData(id, value);
                }}
              />
              <label className="form-label" htmlFor="confirmpassword">
                Confirm Password
              </label>
            </div>
          </div>
          <div className="my-5 form-outline mb-4">
            <div className="position-relative">
              <input
                type="file"
                id="image"
                accept=".jpg"
                className="form-control"
                onChange={(event) => {
                  const file = event.target.files[0];
                  setFile(file);
                }}
              />
            </div>
          </div>
          <button
            className="btn hover-dark c-bg-green align-self-center w-25"
            type="submit"
            onClick={send}
          >
            Sign Up
          </button>
          {signupError && (
            <div className="alert alert-danger mt-3">{signupError}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
