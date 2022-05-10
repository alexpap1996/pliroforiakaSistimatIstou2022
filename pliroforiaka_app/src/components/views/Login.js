import "../styles/ErrorPage.css";
import "../styles/Formstyle.css";
import React from "react";
import mainLogo from "../../resources/gardenblack.png";

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
        <form
          action="/login"
          method="POST"
          className="validated-form"
          noValidate
        >
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              id="username"
              name="username"
              autoFocus
              required
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
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <button className="btn btn-success btn-block">Login</button>
        </form>
        {loginError && (
          <div className="alert alert-danger mt-3">{loginError}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
