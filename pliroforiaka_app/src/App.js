import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/views/Navbar";
import MainBody from "./components/MainBody";
import staticData from "./staticData";
import { Helmet } from "react-helmet";

const { users, articles } = staticData;

class App extends React.Component {
  state = {
    pageName: "Home",
  };

  constructor(props) {
    super(props);

    this.changePageName = this.changePageName.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.getArticles = this.getArticles.bind(this);
  }

  changePageName(pageName) {
    this.setState({ pageName });
  }

  validateUser(username, password) {
    const user = users.find((user) => {
      return user.username === username && user.password === password;
    });
    return user;
  }

  getArticles(filter) {
    return articles;
  }

  render() {
    return (
      <div className="background-custom">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Make it Green</title>
          <link rel="canonical" href="" />
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Navbar changePageNameFn={this.changePageName} />
        <MainBody pageName={this.state.pageName} changePageNameFn={this.changePageName} validateUserFn={this.validateUser} getArticles={this.getArticles} />
      </div>
    );
  }
}

export default App;
