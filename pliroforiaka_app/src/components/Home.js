import "./Home.css";
import HomeCard from "./HomeCard";
import React, { useState } from "react";
import staticData from "../staticData";
import Axios from "axios";

const { articles } = staticData;

const Home = (state) => {
  //test Login
  const testLogin = (e) => {
    e.preventDefault();
    Axios.post("/testLogin")
      .then((res) => console.log("You are logged in as ", res.data))
      .catch((e) => console.log(e));
  };

  // user edit form
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

  //article create-edit form

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [articleFile, setArticleFile] = useState("");

  const createArticle = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("description", description);
    data.append("articleFile", articleFile);

    Axios.post("/createArticle", data)
      .then((res) => console.log("Created new article = ", res.data))
      .catch((e) => console.log(e));
    changePageNameFn("Articles");
  };

  const editArticle = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("description", description);
    data.append("articleFile", articleFile);

    Axios.patch("/editArticle", data)
      .then((res) => console.log("Edited article = ", res.data))
      .catch((e) => console.log(e));
    changePageNameFn("Articles");
  };

  const { changePageNameFn } = state;
  return (
    <>
      {/* User forms start*/}
      <h3>User backend</h3>
      {/* test if logged in */}
      <form action="#">
        <button type="submit" onClick={testLogin}>
          testLogin
        </button>
      </form>

      {/* delete user */}
      <form action="/deleteUser?_method=DELETE" method="POST">
        <button>Delete User</button>
      </form>

      {/* edit user */}
      <form>
        <input
          name="username"
          type="text"
          placeholder="Όνομα χρήστη..."
          onChange={(event) => {
            const { value } = event.target;
            setUsername(value);
          }}
        />
        <input
          name="firstName"
          type="text"
          placeholder="Όνομα..."
          onChange={(event) => {
            const { value } = event.target;
            setFirstName(value);
          }}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Επώνυμο..."
          onChange={(event) => {
            const { value } = event.target;
            setLastName(value);
          }}
        />
        <input
          name="email"
          type="email"
          placeholder="Διεύθυνση email..."
          onChange={(event) => {
            const { value } = event.target;
            setEmail(value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Κωδικός..."
          onChange={(event) => {
            const { value } = event.target;
            setPassword(value);
          }}
        />
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
        <button type="submit" onClick={send}>
          Edit User
        </button>
      </form>

      <form action="/logout" method="POST">
        <button>Logout</button>
      </form>

      {/* User forms end */}

      {/* Article forms start*/}
      <h3>Article backend</h3>

      {/* Create Article */}

      <form>
        <input
          name="title"
          type="text"
          placeholder="Title..."
          onChange={(event) => {
            const { value } = event.target;
            setTitle(value);
          }}
        />
        <input
          name="body"
          type="text"
          placeholder="body..."
          onChange={(event) => {
            const { value } = event.target;
            setBody(value);
          }}
        />
        <input
          name="description"
          type="text"
          placeholder="description..."
          onChange={(event) => {
            const { value } = event.target;
            setDescription(value);
          }}
        />
        <input
          type="file"
          accept=".jpg"
          className="form-control"
          onChange={(event) => {
            const file = event.target.files[0];
            setArticleFile(file);
          }}
        />
        <button type="submit" onClick={createArticle}>
          Create Article
        </button>
      </form>

      {/* edit Article */}
      <form>
        <input
          name="title"
          type="text"
          placeholder="Title..."
          onChange={(event) => {
            const { value } = event.target;
            setTitle(value);
          }}
        />
        <input
          name="body"
          type="text"
          placeholder="body..."
          onChange={(event) => {
            const { value } = event.target;
            setBody(value);
          }}
        />
        <input
          name="description"
          type="text"
          placeholder="description..."
          onChange={(event) => {
            const { value } = event.target;
            setDescription(value);
          }}
        />
        <input
          type="file"
          accept=".jpg"
          className="form-control"
          onChange={(event) => {
            const file = event.target.files[0];
            setArticleFile(file);
          }}
        />
        <button type="submit" onClick={editArticle}>
          Edit Article
        </button>
      </form>

      {/* delete Article */}
      <form action="/deleteArticle?_method=DELETE" method="POST">
        <button>Delete Article</button>
      </form>

      {/* Article forms end */}

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.eu4environment.org/app/uploads/2020/09/1-policies-for-green-economy.jpg"
              className="d-block w-100"
              alt="make it green"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Make it Green</h3>
              <p>Καλώς ορίσατε στην ιστοσελίδα μας.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1509390874189-d75fd22f19f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="d-block w-100"
              alt="reusable energy"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ανανεώσιμες πηγές ενέργειας</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1569000971952-6d0b63581174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="d-block w-100"
              alt="no waste"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container my-5">
        <div className="card-group">
          <HomeCard article={articles[1]} changePageNameFn={changePageNameFn} />
          <HomeCard article={articles[2]} changePageNameFn={changePageNameFn} />
          <HomeCard article={articles[3]} changePageNameFn={changePageNameFn} />
        </div>
      </div>

      <footer>
        <div className="footer-content-container">
          <a href="https://www.youtube.com">
            <img
              border="0"
              alt="YouTube"
              src="https://icons.iconarchive.com/icons/graphics-vibe/classic-3d-social/256/youtube-icon.png"
              height="50"
            />
          </a>
          <a href="https://www.twitter.com">
            <img
              border="0"
              alt="Twitter"
              src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Twitter-icon.png"
              height="50"
            />
          </a>
          <a href="https://www.reddit.com">
            <img
              border="0"
              alt="Reddit"
              src="https://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Reddit-icon.png"
              height="50"
            />
          </a>
          <a href="https://www.instagram.com">
            <img
              border="0"
              alt="Instagram"
              src="https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-3-icon.png"
              height="45"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
