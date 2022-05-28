import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/views/Navbar";
import MainBody from "./components/MainBody";
import staticData from "./staticData";
import { Helmet } from "react-helmet";
import axios from "axios";

const { users, articles } = staticData;

class App extends React.Component {
  state = {
    pageName: "Home",
    searchTerm: "",
    pageData: undefined,
    loginError: undefined,
    signupError: undefined,
    isUserLoggedIn: false,
    loggedInUser: undefined,
    posts : [],
    author_id : "",
  };


  constructor(props) {
    super(props);
    this.getArticles(); 
    this.getID();


    this.getID = this.getID.bind(this)
    this.changePageName = this.changePageName.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
    this.setLoginError = this.setLoginError.bind(this)
    this.setSignupError = this.setSignupError.bind(this)
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.getArticles= this.getArticles.bind(this)
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
    this.setState({ loggedInUser })
    this.setState({ isUserLoggedIn: true })
  }

  async logoutUser (){
    this.setState({isUserLoggedIn: false})
    this.setState({ loggedInUser: undefined })
    this.changePageName('Home')
  }

  async getID (){
  axios.post("/testLogin").then (res => {
    this.setState({ author_id : res.data._id})
  })
  }

  async getArticles (){
    axios.get("http://localhost:3000/articles").then(res => {
      this.setState({posts : res.data})
      })
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
          loggedInUser={this.state.loggedInUser}
          logoutUserFn={this.logoutUser}
        />
        <MainBody
          posts = {this.state.posts}
          pageName={this.state.pageName}
          searchTerm={this.state.searchTerm}
          pageData={this.state.pageData}
          loginError={this.state.loginError}
          signupError={this.state.signupError}
          isUserLoggedIn={this.state.isUserLoggedIn}
          loggedInUser={this.state.loggedInUser}
          changePageNameFn={this.changePageName}
          validateUserFn={this.validateUser}
          setLoginErrorFn={this.setLoginError}
          setSignupErrorFn={this.setSignupError}
          setCurrentUserFn={this.setCurrentUser}
          getArticlesFn={this.getArticles}
          author_id = {this.state.author_id}
          getID={this.getID}
        />
      </div>
    );
  }
}

export default App;
