import "../styles/Profile.css";
import anon from "../../resources/anon.PNG";
import React, { useState } from "react";
import ErrorPage from "./ErrorPage";
import Axios from "axios";

let changePageName;

const Profile = (state) => {
  /* 
    you can now access the user's properties with user.property
    properties are: email, firstname, lastName, image, role, username
  */

  const { changePageNameFn, getArticlesFn } = state;
  changePageName = changePageNameFn;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  const send = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", username);
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("email", email);
    data.append("password", password);
    data.append("file", file);

    Axios.patch("/editUser", data)
      .then((res) => console.log("Edited user data = ", res.data))
      .catch((e) => console.log(e));
    changePageNameFn("Profile");
  };

  const { loggedInUser: user, isUserLoggedIn } = state;

  if (!isUserLoggedIn) {
    return <ErrorPage errorCode="401" errorMessage="Δεν ειστε συνδεδεμενος" />;
  }
  return (
    <div>
      <div className="container-xl px-4 mt-4">
        <nav className="nav nav-borders">
          <a className="nav-link active ms-0" href="#">
            Προφίλ
          </a>
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Φωτογραφία Προφίλ</div>
              <div className="card-body text-center">
                <img
                  className="profileImg rounded-circle mb-2"
                  src={user.image.url}
                  alt=""
                />
                <div className="small font-italic text-muted mb-4">
                  JPG ή PNG μέχρι 5MB
                </div>
                <label htmlFor="myfile">Ανεβάστε μια καινούργια εικόνα</label>
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
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Λεπτομέριες Λογαριασμού</div>
              <div className="card-body">
                <form>
                  <div className="mb-3 p-form-control-wrapper">
                    <label className="small mb-1" htmlFor="username">
                      <b>Όνομα χρήστη</b>
                    </label>
                    <input
                      name="username"
                      type="text"
                      defaultValue={user.username}
                      placeholder="Όνομα χρήστη..."
                      onChange={(event) => {
                        const { value } = event.target;
                        setUsername(value);
                      }}
                    />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6 p-form-control-wrapper">
                      <label className="small mb-1" htmlFor="firstName">
                        <b>Όνομα</b>
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        placeholder="Όνομα..."
                        defaultValue={user.firstName}
                        onChange={(event) => {
                          const { value } = event.target;
                          setFirstName(value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 p-form-control-wrapper">
                      <label className="small mb-1" htmlFor="lastName">
                        <b>Επώνυμο</b>
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        placeholder="Επώνυμο..."
                        defaultValue={user.lastName}
                        onChange={(event) => {
                          const { value } = event.target;
                          setLastName(value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 p-form-control-wrapper">
                    <label className="small mb-1" htmlFor="email">
                      <b>email</b>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Διεύθυνση email..."
                      defaultValue={user.email}
                      onChange={(event) => {
                        const { value } = event.target;
                        setEmail(value);
                      }}
                    />
                  </div>
                  <div className="mb-3 p-form-control-wrapper">
                    <label className="small mb-1" htmlFor="password">
                      <b>Κωδικός</b>
                    </label>
                    <input
                      name="password"
                      type="password"
                      placeholder="Κωδικός..."
                      onChange={(event) => {
                        const { value } = event.target;
                        setPassword(value);
                      }}
                    />
                  </div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={send}
                  >
                    Αποθήκευση
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
