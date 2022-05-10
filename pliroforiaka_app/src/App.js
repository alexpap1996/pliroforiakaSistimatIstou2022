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
    searchTerm: "",
    pageData: undefined,
    loginError: undefined,
    signupError: undefined,
    isUserLoggedIn: false,
  };

  constructor(props) {
    super(props);

    this.changePageName = this.changePageName.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
    this.setLoginError = this.setLoginError.bind(this)
    this.setSignupError = this.setSignupError.bind(this)
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
  }

  changePageName(pageName, pageData, wipeSearchTerm = true) {
    this.setState({ pageName, pageData});
    if (wipeSearchTerm) {
      this.setState({searchTerm: undefined})
    }
  }

  validateUser(username, password) {
    const user = users.find((user) => {
      this.setState({ isUserLoggedIn: true })
      return user.username === username && user.password === password;
    });
    return user;
  }

  updateSearchTerm (searchTerm) {
    this.setState({searchTerm})
  }

  setLoginError (loginError) {
    this.setState({loginError})
  }

  setSignupError (signupError) {
    this.setState({signupError})
  }

  setCurrentUser (loggedInUser) {
    this.setState({loggedInUser})
  }

  logoutUser (){
    this.setState({isUserLoggedIn: false})
    this.changePageName('Home')
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
        <Navbar 
          changePageNameFn={this.changePageName}
          updateSearchTerm={this.updateSearchTerm}
          isUserLoggedIn={this.state.isUserLoggedIn}
          logoutUserFn={this.logoutUser}
        />
        <MainBody
          pageName={this.state.pageName}
          searchTerm={this.state.searchTerm}
          pageData={this.state.pageData}
          loginError={this.state.loginError}
          signupError={this.state.signupError}
          isUserLoggedIn={this.state.isUserLoggedIn}
          changePageNameFn={this.changePageName}
          validateUserFn={this.validateUser}
          setLoginErrorFn={this.setLoginError}
          setSignupErrorFn={this.setSignupError}
          setCurrentUserFn={this.setCurrentUser}
        />
      </div>
    );
  }
}

export default App;
