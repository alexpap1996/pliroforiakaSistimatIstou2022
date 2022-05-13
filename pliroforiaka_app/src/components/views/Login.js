import "../styles/ErrorPage.css";
import "../styles/Formstyle.css";
import React, { useState } from "react";
import mainLogo from "../../resources/gardenblack.png";
import Axios from "axios";

let currUsername = "";
let currPassword = "";

const onLoginButtonClick = (
  validateFn,
  setLoginError,
  setCurrentUser,
  changePageNameFn
) => {
  console.log(currUsername);
  const foundUser = validateFn(currUsername, currPassword);
  if (!foundUser) {
    setLoginError("User Not Found");
  } else {
    //login logic here
    setCurrentUser(foundUser);
    setLoginError(undefined);
    changePageNameFn("Home");
  }
};

const toggleActiveClass = (value, classList) => {
  if (!value) {
    classList.remove("active");
  } else {
    classList.add("active");
  }
};

const Login = (props) => {
  const {
    validateUserFn,
    loginError,
    setLoginError,
    setCurrentUser,
    changePageNameFn,
  } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);

    await Axios.post("/login", { username, password })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
    changePageNameFn("Home");
  };

  return (
    <div className="container pt-5">
      <div className="narrow-form d-flex flex-column align-items-center pt-5">
        <img
          className="mb-4"
          src={mainLogo}
          width="72"
          height="72"
          alt="main logo"
        ></img>
        <h2 className="mb-4">Please log in</h2>
        <form className="validated-form" noValidate>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              id="username"
              name="username"
              autoFocus
              required
              onChange={(event) => {
                const { value } = event.target;
                setUsername(value);
              }}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              required
              onChange={(event) => {
                const { value } = event.target;
                setPassword(value);
              }}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <button className="btn btn-success btn-block" onClick={login}>
            Login
          </button>
        </form>
        {loginError && (
          <div className="alert alert-danger mt-3">{loginError}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
